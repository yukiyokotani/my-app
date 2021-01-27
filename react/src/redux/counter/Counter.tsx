import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import counterSlice from './counterSlice';
import { AppDispatch, RootState } from '../../utils/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    button: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const Counter: React.FC = () => {
  const classes = useStyles();
  const { increment, decrement } = counterSlice.actions;
  const count = useSelector<RootState, number>((state) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        {count}
      </Typography>
      <div className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          INCREMENT
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
        >
          DECREMENT
        </Button>
      </div>
    </div>
  );
};

export default Counter;
