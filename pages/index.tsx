/* eslint-disable react/no-children-prop */
import {useAtomValue} from "jotai"
import {When} from "react-if"

import {ActivityGoalPage} from "components/Pages/ActivityAndGoal"
import {BodyPage} from "components/Pages/BodyInfo"
import {CalculationsPage} from "components/Pages/Calculations"

import {tabAtom} from "stores/UI"

const Home = () => {
  const tab = useAtomValue(tabAtom)

  return (
    <>
      <When condition={tab === "BODY"} children={<BodyPage />} />
      <When
        condition={tab === "ACTIVITY/GOAL"}
        children={<ActivityGoalPage />}
      />
      <When
        condition={tab === "CALCULATIONS"}
        children={<CalculationsPage />}
      />
    </>
  )
}

export default Home
