export const formatGoal = (goal: Goal) => {
  if (goal === "LOSE_WEIGHT") {
    return "Schudnąć"
  }

  if (goal === "GAIN_WEIGHT") {
    return "Przytyć"
  }

  return "Utrzymać wagę"
}
