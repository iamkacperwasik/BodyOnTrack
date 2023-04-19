import {Option} from "components/Tabs/Activity/Option"
import {Heading} from "components/UI/Heading"

export const Activity = () => {
  return (
    <>
      <Heading>2. Aktywność fizyczna</Heading>

      <ul className="flex list-inside list-disc flex-col gap-2">
        <Option activityLevel={0}>
          Praca siedząca (mało lub brak ćwiczeń)
        </Option>
        <Option activityLevel={1}>
          Lekka aktywność (mało lub 1-3 treningi w tygodniu)
        </Option>
        <Option activityLevel={2}>
          Średnia aktywność (3-5 treningów w tygodniu)
        </Option>
        <Option activityLevel={3}>
          Wysoka aktywność (6-7 treningów w tygodniu)
        </Option>
        <Option activityLevel={4}>
          Bardzo wysoka aktywność (ciężkie trening i praca fizyczna)
        </Option>
      </ul>
    </>
  )
}
