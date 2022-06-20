import { Fragment } from 'react';
import useLocale from '../../../hooks/use-locale';
import { matchAgeGroupToRange } from '../../../lib/helpers/map-age-group';

const AgeGroupExpecation = ({ value, ageGroup }) => {
  const { strings } = useLocale('questions');

  const { lowerBound, upperBound } = matchAgeGroupToRange(ageGroup);

  return (
    <Fragment>
      <span>
        {`${strings.from} ${lowerBound} ${strings.to} ${upperBound} (${strings.months}):`}
      </span>
      <span>
        <strong> {value}</strong>
      </span>
    </Fragment>
  );
};
export default AgeGroupExpecation;
