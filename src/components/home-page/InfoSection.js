import cn from 'classnames';
import classes from './InfoSection.module.css';

const InfoSection = (props) => {
  const { title, text, bgVariant } = props;
  return (
    <div className={cn(classes.section, classes[bgVariant])}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
export default InfoSection;
