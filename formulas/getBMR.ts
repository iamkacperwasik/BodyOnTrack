// BMR - basal metabolic rate

const getBMR = (
  gender: "M" | "F",
  weight: number,
  height: number,
  age: number
): number => {
  if (gender === "M")
    return 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;

  return 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
};

export default getBMR;
