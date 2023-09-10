// AMR - active metabolic rate

export const getAMR = (bmr: number, level: number): number => {
  return bmr * [1.2, 1.375, 1.55, 1.725, 1.9].at(level)!
}
