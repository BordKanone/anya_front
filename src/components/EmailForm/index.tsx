import { FC } from 'react';

import classes from './EmailForm.module.css';

export interface EmailFormProps {
  isVisible: boolean;
  onSubmit: () => void;
  onError: () => void;
}

export const EmailForm: FC<EmailFormProps> = ({ onError, onSubmit, isVisible }) => {
  return (
    <div style={{ display: isVisible ? 'flex' : 'none' }} className={classes.emailForm}>
      <div className={classes.emailModal}>
        <div className={classes.emailContainer}>
          <div className={classes.emailContent}>
            <div className={classes.emailBlockLogoContainer}>
              <div className={classes.emailLogoBlock} />
            </div>
            <div className={classes.emailButtonsContainer}>
              <div
                className={classes.emailButtonSucces}
                onKeyDown={() => onSubmit()}
                onClick={() => onSubmit()}
                role={'button'}
                tabIndex={0}
              >
                Ну пойдем
              </div>
              <div
                className={classes.emailButtonError}
                onKeyDown={() => onError()}
                onClick={() => location.assign('/error')}
                role={'button'}
                tabIndex={0}
              >
                Ни
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
