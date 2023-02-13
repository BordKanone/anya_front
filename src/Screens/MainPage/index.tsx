import { useEffect, useState } from 'react';

import { Bear } from '../../components/Bear';
import { INCLUDE_PHRASE, INCLUDE_PHRASES } from '../../components/constants/replics';
import { EmailForm } from '../../components/EmailForm';
import classes from './MainPage.module.css';

export const MainPage = () => {
  const [succesEmailMessage, setSuccessEmailMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const handleSuccessEmailMessage = () => {
    setSuccessEmailMessage('true');
    location.assign('/izba');
    setIsVisible(false);
  };

  const handleErrorEmailMessage = () => {
    setSuccessEmailMessage('false');
  };
  return (
    <div className={classes.mainPage}>
      <EmailForm
        isVisible={isVisible}
        onSubmit={handleSuccessEmailMessage}
        onError={handleErrorEmailMessage}
      />
      <Bear
        phrasesInto={[
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_1],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_2],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_3],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_4],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_5],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_6],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_7],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_8],
        ]}
        successEmail={succesEmailMessage}
        isVisible={isVisible}
        onModalVisible={setIsVisible}
      />
      <div className={classes.kustContainer}>
        <div className={classes.kust} />
        <div className={classes.kustTwo} />
      </div>
      <div className={classes.flowContainer}>
        <div className={classes.flow} />
      </div>
      <div className={classes.threeContainer}>
        <div className={classes.threeOne}></div>
        <div className={classes.threeTwo}></div>
      </div>
    </div>
  );
};
