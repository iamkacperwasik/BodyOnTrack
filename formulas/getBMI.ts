const getBMI = (weight: number, height: number): number => {
  // TODO: calculation for pounds
  return weight / (height / 100) ** 2;
};

export default getBMI;
