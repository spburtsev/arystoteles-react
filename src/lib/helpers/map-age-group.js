import AgeGroup from '../enums/AgeGroup';

export const matchMonthRange = (lowerBound, upperBound) => {
  let lowerMatch = matchAgeGroup(lowerBound);
  const range = [lowerMatch];
  for (let i = lowerBound + 1; i <= upperBound; ++i) {
    const match = matchAgeGroup(i);
    if (!range.some((x) => x === match)) {
      range.push(match);
      console.log(match);
    }
  }
  if (range.length > 1) {
    return range.filter((x) => x !== AgeGroup.None);
  }
  return range;
};

export const matchGroupsToRange = (ageGroups) => {
  let lowerBound = 0;
  let upperBound = 0;
  switch (ageGroups[0]) {
    case AgeGroup.Group1:
      lowerBound = 0;
      upperBound = 1;
      break;
    case AgeGroup.Group2:
      lowerBound = 1;
      upperBound = 4;
      break;
    case AgeGroup.Group3:
      lowerBound = 4;
      upperBound = 8;
      break;
    case AgeGroup.Group4:
      lowerBound = 8;
      upperBound = 12;
      break;
    case AgeGroup.Group5:
      lowerBound = 12;
      upperBound = 16;
      break;
    case AgeGroup.Group6:
      lowerBound = 16;
      upperBound = 20;
      break;
    case AgeGroup.Group7:
      lowerBound = 20;
      upperBound = 24;
      break;
    case AgeGroup.Group8:
      lowerBound = 24;
      upperBound = 30;
      break;
    case AgeGroup.Group9:
      lowerBound = 30;
      upperBound = 36;
      break;
    case AgeGroup.Group10:
      lowerBound = 36;
      upperBound = 48;
      break;
    case AgeGroup.Group11:
      lowerBound = 48;
      upperBound = 60;
      break;
    case AgeGroup.Group12:
      lowerBound = 60;
      upperBound = 66;
      break;
    case AgeGroup.None:
      lowerBound = 66;
      upperBound = 66;
      break;
    default:
      break;
  }
  switch (ageGroups[ageGroups.length - 1]) {
    case AgeGroup.Group1:
      upperBound = 1;
      break;
    case AgeGroup.Group2:
      upperBound = 4;
      break;
    case AgeGroup.Group3:
      upperBound = 8;
      break;
    case AgeGroup.Group4:
      upperBound = 12;
      break;
    case AgeGroup.Group5:
      upperBound = 16;
      break;
    case AgeGroup.Group6:
      upperBound = 20;
      break;
    case AgeGroup.Group7:
      upperBound = 24;
      break;
    case AgeGroup.Group8:
      upperBound = 30;
      break;
    case AgeGroup.Group9:
      upperBound = 36;
      break;
    case AgeGroup.Group10:
      upperBound = 48;
      break;
    case AgeGroup.Group11:
      upperBound = 60;
      break;
    case AgeGroup.Group12:
      upperBound = 66;
      break;
    case AgeGroup.None:
      upperBound = 66;
      break;
    default:
      break;
  }
  return {
    lowerBound,
    upperBound,
  };
};

export const matchAgeGroup = (months) => {
  if (months < 1) {
    return AgeGroup.Group1;
  }
  if (months < 4) {
    return AgeGroup.Group2;
  }
  if (months < 8) {
    return AgeGroup.Group3;
  }
  if (months < 12) {
    return AgeGroup.Group4;
  }
  if (months < 16) {
    return AgeGroup.Group5;
  }
  if (months < 20) {
    return AgeGroup.Group6;
  }
  if (months < 24) {
    return AgeGroup.Group7;
  }
  if (months < 30) {
    return AgeGroup.Group8;
  }
  if (months < 36) {
    return AgeGroup.Group9;
  }
  if (months < 48) {
    return AgeGroup.Group10;
  }
  if (months < 60) {
    return AgeGroup.Group11;
  }
  if (months < 66) {
    return AgeGroup.Group12;
  }
  return AgeGroup.None;
};
