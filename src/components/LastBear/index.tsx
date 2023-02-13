import c from 'classnames';
import { FC, useEffect, useState } from 'react';

import { INCLUDE_PHRASE, INCLUDE_PHRASES } from '../constants/replics';
import { IncludeDialog } from '../ReplicModule/IncludeDialog';
import classes from './LastBear.module.css';

export interface BearProps {
  isVisible: boolean;
  successEmail: string;
  onModalVisible: (value: boolean) => void;
  phrasesInto: string[];
  lastMessage: string;
}

export const LastBear: FC<BearProps> = ({
  isVisible,
  onModalVisible,
  phrasesInto,
  lastMessage,
}) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isCurrentReplicisFinished, setIsCurrentReplicisFinished] = useState(false);
  const [phrases, setPhrases] = useState<string[]>(phrasesInto);
  const [thisLastMessage, setThisLastMesssage] = useState(lastMessage);

  useEffect(() => {
    console.log(
      'message',
      currentMessage,
      'thisLsssastMessage',
      thisLastMessage,
      lastMessage,
    );
    if (currentMessage === thisLastMessage) onModalVisible(true);
  }, [isCurrentReplicisFinished, thisLastMessage]);

  return (
    <div className={classes.bear}>
      <div className={classes.bearWait} />
      <div className={classes.bearPopup}>
        <div
          style={{ display: isCurrentReplicisFinished ? 'none' : 'flex' }}
          className={c(classes.bearPopupContainer, {
            [classes.bearPopupContainerSpeak]: true,
          })}
        >
          <IncludeDialog
            lastMessage={INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_12]}
            isVisibleModal={isVisible}
            setVisibleModal={onModalVisible}
            onChangeMessage={setCurrentMessage}
            currentState={isCurrentReplicisFinished}
            onFinishedSpeak={setIsCurrentReplicisFinished}
            value={phrases}
          />
        </div>
      </div>
    </div>
  );
};
