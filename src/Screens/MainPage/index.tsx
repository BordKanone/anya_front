import { Bear } from '../../components/Bear';
import classes from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <Bear />
    </div>
  );
};
