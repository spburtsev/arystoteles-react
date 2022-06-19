import ActivityCategory from '../enums/ActivityCategory';

const mapping = {
  [ActivityCategory.Social]: 'social',
  [ActivityCategory.Movement]: 'movement',
  [ActivityCategory.Language]: 'language',
  [ActivityCategory.Cognitive]: 'cognitive',
};

const mapCategory = (category) => {
  const item = Object.values(ActivityCategory).find((val) => val === category);
  if (!item) {
    return 'unknown';
  }
  return mapping[item];
};
export default mapCategory;
