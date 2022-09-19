import AgeInput from "components/Form/AgeInput";
import GenderSwitch from "components/Form/GenderSwitch";
import HeightInput from "components/Form/HeightInput";
import WeightInput from "components/Form/WeightInput";

const Form = () => (
  <div className="flex gap-4 flex-col">
    <AgeInput />
    <WeightInput />
    <HeightInput />
    <GenderSwitch />
  </div>
);

export default Form;
