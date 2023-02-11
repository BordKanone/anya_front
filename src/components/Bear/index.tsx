import c from 'classnames';
import { useEffect, useState } from 'react';

import classes from './Bear.module.css';
import getSoundReplic from './davai.mp3';

export const Bear = () => {
  const [isBearSeat, setIsBearSeat] = useState(false);
  const [bearStep, setBearStep] = useState({ x: -700, y: 45 });
  const [isUpStep, setIsUpStep] = useState(true);
  const getReplica = new Audio(getSoundReplic);

  useEffect(() => {
    getReplica.play();
  }, [isBearSeat]);

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
      <div className={c(classes.bearIcon, { [classes.bearSeat]: isBearSeat })} />
      <div className={classes.bearPopup}>
        <div className={classes.bearPopupContainer}>
          {isBearSeat ? 'Чу?' : 'Ppppp...Ррррр... \n Ppppp...Ррррр...'}
        </div>
      </div>
    </div>
  );
};
