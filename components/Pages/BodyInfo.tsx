import {useAtomValue, useSetAtom} from "jotai"
import Head from "next/head"

import {Body} from "components/Tabs/Body"
import {Button} from "components/UI/Button"

import {ageAtom, heightAtom, weightAtom} from "stores/Body"
import {tabAtom} from "stores/Navigation"

export const BodyPage = () => {
  const setTab = useSetAtom(tabAtom)

  const age = useAtomValue(ageAtom)
  const weight = useAtomValue(weightAtom)
  const height = useAtomValue(heightAtom)

  const canGoNext = age !== null && weight !== null && height !== null

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen justify-center bg-[#111111f9] text-white">
        <div className="flex min-w-[600px] flex-col gap-8 p-8">
          <Body />

          <div className="flex gap-4">
            <Button
              onClick={() => setTab("ACTIVITY/GOAL")}
              disabled={!canGoNext}
            >
              Przejdź dalej
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
