import {EditProfileButton} from "components/buttons/EditProfileButton"

export const EstimationDisplay = () => {
  return (
    <div className="container mx-auto mt-8 flex max-w-2xl items-baseline justify-between rounded-lg p-4 text-xl text-white">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">
          Body Profile Estimations
        </h1>
      </div>

      <div className="flex items-center">
        <EditProfileButton />
      </div>
    </div>
  )
}
