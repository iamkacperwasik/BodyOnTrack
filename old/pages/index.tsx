/* eslint-disable react/no-children-prop */
import {useAtomValue} from "jotai"

import {ActivityGoalPage} from "components/Pages/ActivityAndGoal"
import {BodyPage} from "components/Pages/BodyInfo"
import {CalculationsPage} from "components/Pages/Calculations"

import {tabAtom} from "stores/Navigation"

const Home = () => {
  const tab = useAtomValue(tabAtom)

  return (
    <>
      {tab === "BODY" && <BodyPage />}
      {tab === "ACTIVITY/GOAL" && <ActivityGoalPage />}
      {tab === "CALCULATIONS" && <CalculationsPage />}
    </>
  )
}

export default Home
