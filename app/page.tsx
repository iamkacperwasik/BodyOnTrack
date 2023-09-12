"use client"

import {useAtomValue} from "jotai"

import {ProfileForm} from "components/form/ProfileForm"

import {EstimationDisplay} from "components/estimation/EstimationDisplay"

import {form_submitted_atom} from "atoms/form/FormSubmitted"
import {is_all_data_provided_atom} from "atoms/form/IsAllDataProvided"

export default function Home() {
  const is_all_data_provided = useAtomValue(is_all_data_provided_atom)
  const form_submitted = useAtomValue(form_submitted_atom)

  return (
    <div>
      {!is_all_data_provided || !form_submitted ? (
        <ProfileForm />
      ) : (
        <EstimationDisplay />
      )}
    </div>
  )
}
