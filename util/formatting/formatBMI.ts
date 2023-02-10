export const formatBMI = (bmi: number) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(bmi);
};
