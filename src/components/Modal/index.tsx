import React, { FC, useState } from 'react';

import classes from './Modal.module.css';

export interface ModalProps {
  title: string;
  content: React.ReactNode;
  isVisible: boolean;
  onSubmit?: (value: boolean) => void;
  onCancel?: (value: boolean) => void;
  answer?: number;
}

export const Modal: FC<ModalProps> = ({
  title,
  isVisible,
  content,
  onSubmit,
  onCancel,
  answer,
}) => {
  return (
    <div style={{ display: isVisible ? 'flex' : 'none' }} className={classes.modal}>
      <div className={classes.modalContainer}>
        <div className={classes.modalContentWrapper}>{content}</div>
      </div>
    </div>
  );
};
