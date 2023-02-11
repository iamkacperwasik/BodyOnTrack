const getBMI = (weight: number, height: number): number => {
  return weight / (height / 100) ** 2
}

export default getBMI
