import {useSetAtom} from "jotai"
import Head from "next/head"

import {Calculations} from "components/Tabs/Calculations"

import {tabAtom} from "stores/UI"

export const CalculationsPage = () => {
  const setTab = useSetAtom(tabAtom)

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen justify-center bg-[#111111f9] text-white">
        <div className="flex min-w-[600px] flex-col gap-8 p-8">
          <Calculations />

          <div className="flex gap-4">
            <button
              className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300"
              onClick={() => setTab("BODY")}
            >
              Zmień dane ciała
            </button>

            <button
              className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300"
              onClick={() => setTab("ACTIVITY/GOAL")}
            >
              Zmień aktywność i wagę
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
