const monthDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

const ageInMonths = (birthDate) => {
  const today = new Date();
  const birthDateDate = new Date(birthDate);
  const age = monthDiff(birthDateDate, today);
  return (locale) => `${age}`;
};
export default ageInMonths;
