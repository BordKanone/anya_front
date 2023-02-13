import { Modal } from '../../components/Modal';
import { FirstQuestion } from './FirstQuestion';
import classes from './Home.module.css';

export const Home = () => {
  return (
    <div className={classes.homePage}>
      <Modal isVisible={true} title={'Хуй'} content={<FirstQuestion />} />
    </div>
  );
};
