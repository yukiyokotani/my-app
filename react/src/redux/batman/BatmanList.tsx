import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { fetchAllBatmanTvShow } from './batmanSlice';
import { RootState } from '../../utils/store';
import { Show } from '../../interfaces';

const BatmanList: React.FC = () => {
  const list = useSelector<RootState, Show[]>((state) => state.batman.shows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBatmanTvShow());
  }, []);

  return (
    <div>
      <Typography variant="h5">Batman TV Shows</Typography>
      <ul>
        {list.map((show) => (
          <li key={show.id}>{show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BatmanList;
