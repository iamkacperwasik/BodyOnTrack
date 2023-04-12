import Head from "next/head"

import {ActivityAndGoal} from "views/ActivityAndGoal"
import {BodyInfo} from "views/BodyInfo"
import {Calculations} from "views/Calculations"

const Home = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      {/* <BodyInfo /> */}
      {/* <ActivityAndGoal /> */}
      <Calculations />
    </>
  )
}

export default Home
