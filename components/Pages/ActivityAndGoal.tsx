import {useAtomValue, useSetAtom} from "jotai"
import Head from "next/head"

import {Activity} from "components/Tabs/Activity"
import {Goal} from "components/Tabs/Goal"
import {Button} from "components/UI/Button"

import {goalAtom, goalTargetAtom} from "stores/Body"
import {tabAtom} from "stores/Navigation"

export const ActivityGoalPage = () => {
  const setTab = useSetAtom(tabAtom)
  const goal = useAtomValue(goalAtom)
  const goalTarget = useAtomValue(goalTargetAtom)

  const canGoNext = goal === "MAINTAIN" || goalTarget !== null

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen justify-center bg-[#111111f9] text-white">
        <div className="flex min-w-[600px] flex-col gap-8 p-8">
          <Activity />
          <Goal />

          <div className="flex gap-4">
            <Button onClick={() => setTab("BODY")}>Zmień dane ciała</Button>
            <Button
              onClick={() => setTab("CALCULATIONS")}
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
