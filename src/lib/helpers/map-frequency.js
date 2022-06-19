import ActivityFrequency from '../enums/ActivityFrequency';

const mapping = {
  [ActivityFrequency.MultiplePerDay]: 'multiplePerDay',
  [ActivityFrequency.SinglePerDay]: 'singlePerDay',
  [ActivityFrequency.SinglePerWeek]: 'singlePerWeek',
  [ActivityFrequency.MultiplePerWeek]: 'multiplePerWeek',
  [ActivityFrequency.Regularly]: 'regularly',
};

const mapFrequency = (frequency) => {
  const item = Object.values(ActivityFrequency).find(
    (val) => val === frequency,
  );
  if (!item) {
    return 'unknown';
  }
  return mapping[item];
};
export default mapFrequency;
