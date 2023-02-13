import { useState } from 'react';

import { Bear } from '../../components/Bear';
import { INCLUDE_PHRASE, INCLUDE_PHRASES } from '../../components/constants/replics';
import { LastBear } from '../../components/LastBear';
import classes from './LastPage.module.css';

export const LastPage = () => {
  const [succesEmailMessage, setSuccessEmailMessage] = useState('');
  const isVisible = false;
  const setIsVisible = (value: boolean) => {
    if (value) {
      console.log('asdsadasaaaaaaaaaaaaaa');
      location.assign('/qrcode');
    }
  };

  return (
    <div className={classes.lastPage}>
      <LastBear
        lastMessage={INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_12]}
        phrasesInto={[
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_9],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_10],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_11],
          INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_12],
        ]}
        successEmail={succesEmailMessage}
        isVisible={isVisible}
        onModalVisible={setIsVisible}
      />
    </div>
  );
};
