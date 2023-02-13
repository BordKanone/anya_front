import c from 'classnames';
import { FC, useEffect, useState } from 'react';

import { INCLUDE_PHRASE, INCLUDE_PHRASES } from '../../constants/replics';
import classes from './IncludeDialog.module.css';

export interface IcludeDialogProps {
  value: string[];
  isVisibleModal: boolean;
  currentState: boolean;
  lastMessage: string;
  setVisibleModal: (value: boolean) => void;
  onFinishedSpeak: (value: boolean) => void;
  onChangeMessage: (value: string) => void;
}

export const IncludeDialog: FC<IcludeDialogProps> = ({
  value,
  onFinishedSpeak,
  onChangeMessage,
  setVisibleModal,
  lastMessage,
}) => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isFinish, setIsFinish] = useState(false);
  const [cleanMessage, setCleanMessages] = useState<string[]>(value);
  const [message, setMessage] = useState('');
  const [simbolsArray, setSimbolsArray] = useState<string[]>([]);
  const [thisLastMessage, setThisLastMessage] = useState(lastMessage);

  useEffect(() => {
    console.log('message', message, 'thisLastMessage', thisLastMessage);
    if (message === thisLastMessage) {
      setTimeout(() => {
        setVisibleModal(true);
        onFinishedSpeak(true);
      }, 2000);
    }
  }, [message, lastMessage]);

  useEffect(() => {
    if (!cleanMessage.length) {
      return;
    }
    setTimeout(() => {
      const currentMessage = cleanMessage.shift();
      setCleanMessages(cleanMessage);
      currentMessage && setMessage(currentMessage);
    }, 1000);
  }, [cleanMessage, isFinish]);

  useEffect(() => {
    const simbols = message.split('');
    setSimbolsArray(simbols);
  }, [message]);

  useEffect(() => {
    if (message.length !== 0 && currentPhrase.length === message.length) {
      setTimeout(() => {
        setCurrentPhrase('');
      }, 1000);
      return setIsFinish(!isFinish);
    }
    setTimeout(() => {
      const simbol = simbolsArray.shift();
      if (simbol) {
        setSimbolsArray(simbolsArray);
        setCurrentPhrase(currentPhrase + simbol);
      }
    }, 50);
  }, [currentPhrase, simbolsArray]);

  return <div className={classes.dialogPopup}>{currentPhrase}</div>;
};
