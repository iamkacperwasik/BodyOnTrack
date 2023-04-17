import {useAtomValue, useSetAtom} from "jotai"
import Head from "next/head"

import {Calculations} from "components/Tabs/Calculations"
import {Button} from "components/UI/Button"

import {
  activityLevelAtom,
  ageAtom,
  goalAtom,
  heightAtom,
  sexAtom,
  weightAtom,
} from "stores/Body"
import {tabAtom} from "stores/Navigation"

export const CalculationsPage = () => {
  const setTab = useSetAtom(tabAtom)

  const age = useAtomValue(ageAtom)
  const weight = useAtomValue(weightAtom)
  const height = useAtomValue(heightAtom)
  const sex = useAtomValue(sexAtom)
  const activityLevel = useAtomValue(activityLevelAtom)
  const goal = useAtomValue(goalAtom)

  // console.log({age, weight, height, sex, activityLevel, goal})

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen justify-center bg-[#111111f9] text-white">
        <div className="flex min-w-[600px] flex-col gap-8 p-8">
          <Calculations />

          <div className="flex gap-4">
            <Button onClick={() => setTab("BODY")}>Zmień dane ciała</Button>
            <Button onClick={() => setTab("ACTIVITY/GOAL")}>
              Zmień aktywność i wagę
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
