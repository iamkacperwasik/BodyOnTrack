import {useSetAtom} from "jotai"
import Head from "next/head"

import {Body} from "components/Tabs/Body"

import {tabAtom} from "stores/UI"

export const BodyPage = () => {
  const setTab = useSetAtom(tabAtom)

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen justify-center bg-[#111111f9] text-white">
        <div className="flex min-w-[600px] flex-col gap-8 p-8">
          <Body />

          <div className="flex gap-4">
            <button
              className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300"
              onClick={() => setTab("ACTIVITY/GOAL")}
            >
              Przejdź dalej
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
