import type { NextPage } from "next";
import { When } from "react-if";

import Form from "components/Form";

import getBMI from "formulas/getBMI";
import getBMR from "formulas/getBMR";

import { useBodyInfoStore } from "stores/BodyInfo";

const Home: NextPage = () => {
  const { age, weight, height, gender } = useBodyInfoStore();

  return (
    <div className="p-5">
      <Form />

      <When condition={age !== null && weight !== null && height !== null}>
        <div className="mt-5">
          <p>BMI: {getBMI(weight!, height!).toFixed(2)}</p>
          <p>BMR: {getBMR(gender, weight!, height!, age!).toFixed(2)}</p>
        </div>
      </When>
    </div>
  );
};

export default Home;
