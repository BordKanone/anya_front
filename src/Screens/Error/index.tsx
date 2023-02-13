import classes from './Error.module.css';

export const Error = () => {
  return (
    <div className={classes.error}>
      <div className={classes.errorWrapper}>
        <div className={classes.errorText}>СТРАНИЦА ПОЗОРА</div>
      </div>
    </div>
  );
};
