import MainNavigation from './MainNavigation';
import AppHeader from './AppHeader';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.app}>
      <MainNavigation />
      <main className={classes.main}>
        <AppHeader />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
