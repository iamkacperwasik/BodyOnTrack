"use client"

import {useAtomValue} from "jotai"

import {EstimationDisplay} from "screens/estimation/EstimationDisplay"
import {ProfileDisplay} from "screens/profile/ProfileDisplay"

import {form_submitted_atom} from "atoms/form/FormSubmitted"
import {is_all_data_provided_atom} from "atoms/form/IsAllDataProvided"

export default function Home() {
  const is_all_data_provided = useAtomValue(is_all_data_provided_atom)
  const form_submitted = useAtomValue(form_submitted_atom)

  const should_render_profile_form = !is_all_data_provided || !form_submitted

  if (should_render_profile_form) {
    return <ProfileDisplay />
  } else {
    return <EstimationDisplay />
  }
}
