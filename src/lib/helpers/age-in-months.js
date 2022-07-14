const ageInMonths = (birthDate) => {
  const today = new Date();
  const birthDateDate = new Date(birthDate);
  let age = today.getFullYear() - birthDateDate.getFullYear();
  const m = today.getMonth() - birthDateDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDateDate.getDate())) {
    age -= 1;
  }
  return (locale) => `${age} months`;
};
export default ageInMonths;
