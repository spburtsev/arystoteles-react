import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import AppHeader from './AppHeader';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.wrapper}>
        <AppHeader />
        <main className={classes.main}>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
