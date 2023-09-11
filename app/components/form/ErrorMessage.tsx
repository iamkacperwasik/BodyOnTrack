import {FC} from "react"

type ErrorMessageProps = {
  message: string | null
}

export const ErrorMessage: FC<ErrorMessageProps> = ({message}) => {
  if (message) {
    return <p className="mt-2 text-sm text-red-600">{message}</p>
  }

  return null
}
