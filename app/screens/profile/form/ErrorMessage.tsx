import {FC} from "react"

type ErrorMessageProps = {
  message: string | null // The error message to display (or null if no error)
}

export const ErrorMessage: FC<ErrorMessageProps> = ({message}) => {
  // Check if an error message is provided (not null)
  if (message) {
    // Render the error message with specific styling
    return <p className="mt-2 text-sm text-red-600">{message}</p>
  }

  // If no error message is provided, return null (no rendering)
  return null
}
