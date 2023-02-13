import classes from './QRCode.module.css';

export const QRCode = () => {
  return (
    <div className={classes.qrcode}>
      <div className={classes.qrcodeContainer}>
        <div className={classes.qrcodeContent} />
      </div>
    </div>
  );
};
