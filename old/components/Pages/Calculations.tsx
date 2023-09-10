import {useSetAtom} from "jotai"
import Head from "next/head"

import {Calculations} from "components/Tabs/Calculations"
import {Button} from "components/UI/Button"
import {Footer} from "components/UI/Footer"

import {tabAtom} from "stores/Navigation"

export const CalculationsPage = () => {
  const setTab = useSetAtom(tabAtom)

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen flex-col items-center bg-[#111111f9] text-white">
        <div className="flex min-w-[600px] flex-col gap-8 p-8">
          <Calculations />

          <div className="flex gap-4">
            <Button onClick={() => setTab("BODY")}>Zmień dane ciała</Button>
            <Button onClick={() => setTab("ACTIVITY/GOAL")}>
              Zmień aktywność i wagę
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
