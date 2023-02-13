import c from 'classnames';
import { FC, useEffect, useState } from 'react';

import { INCLUDE_PHRASE, INCLUDE_PHRASES } from '../constants/replics';
import { IncludeDialog } from '../ReplicModule/IncludeDialog';
import classes from './Bear.module.css';

export interface BearProps {
  isVisible: boolean;
  successEmail: string;
  onModalVisible: (value: boolean) => void;
  phrasesInto: string[];
}

export const Bear: FC<BearProps> = ({
  isVisible,
  onModalVisible,
  successEmail,
  phrasesInto,
}) => {
  const [isBearSeat, setIsBearSeat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [bearStep, setBearStep] = useState({ x: -700, y: 45 });
  const [isUpStep, setIsUpStep] = useState(false);
  const [isBearWait, setIsBearWait] = useState(false);
  const [isCurrentReplicisFinished, setIsCurrentReplicisFinished] = useState(false);
  const [phrases, setPhrases] = useState<string[]>(phrasesInto);

  useEffect(() => {
    if (currentMessage === INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_8])
      onModalVisible(true);
  }, [isCurrentReplicisFinished]);

  useEffect(() => {
    if (bearStep.x < 120) return;
    setTimeout(() => {
      setIsBearSeat(false);
      setIsBearWait(true);
    }, 2000);
  }, [bearStep]);

  useEffect(() => {
    if (bearStep.x >= 120) {
      return setIsBearSeat(true);
    }
    setIsUpStep(!isUpStep);
    setTimeout(() => {
      setBearStep({
        x: bearStep.x + 30,
        y: isUpStep ? 55 : 45,
      });
    }, 500);
  }, [bearStep]);

  return (
    <div
      style={{
        transform: `translate(${bearStep.x}px, ${bearStep.y}px)`,
      }}
      className={classes.bear}
    >
      <div
        className={c(classes.bearIcon, {
          [classes.bearSeat]: isBearSeat,
          [classes.bearWait]: isBearWait,
        })}
      />
      <div className={classes.bearPopup}>
        <div
          style={{ display: isCurrentReplicisFinished ? 'none' : 'flex' }}
          className={c(classes.bearPopupContainer, {
            [classes.bearPopupContainerSpeak]: true,
          })}
        >
          {isBearWait ? (
            <IncludeDialog
              lastMessage={INCLUDE_PHRASE[INCLUDE_PHRASES.INCLUDE_MESSAGE_8]}
              isVisibleModal={isVisible}
              setVisibleModal={onModalVisible}
              onChangeMessage={setCurrentMessage}
              currentState={isCurrentReplicisFinished}
              onFinishedSpeak={setIsCurrentReplicisFinished}
              value={phrases}
            />
          ) : isBearSeat ? (
            'Чу?'
          ) : (
            'ррррррРРРРРррр РРрррррРРрРРрррРрры'
          )}
        </div>
      </div>
    </div>
  );
};
