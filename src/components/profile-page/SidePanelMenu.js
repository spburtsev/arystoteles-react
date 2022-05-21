import useLocale from '../../hooks/use-locale';
import cn from 'classnames';
import classes from './SidePanelMenu.module.css';

const SidePanelMenu = (props) => {
  const { selection } = props;
  const { strings: locale } = useLocale('profilePage');

  return (
    <ul className={classes.menu}>
      {selection.map((item, index) => (
        <li key={index}>
          <button
            onClick={item.onSelect}
            className={cn(item.selected && classes.active)}
          >
            {locale[item.section]}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default SidePanelMenu;
