import Age from "components/Form/Input/Age"
import Height from "components/Form/Input/Height"
import Weight from "components/Form/Input/Weight"
import Gender from "components/Form/Switch/Gender"

const Form = () => (
  <div className="flex flex-col gap-4">
    <Age />
    <Weight />
    <Height />
    <Gender />
  </div>
)

export default Form
