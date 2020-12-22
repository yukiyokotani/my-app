import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getMember } from './hinatazakaSlice';
import { RootState } from '../../utils/store';
import { Member } from '../../../api';

const HinatazakaMember: React.FC = () => {
  const member = useSelector<RootState, Member | undefined>(
    (state) => state.hinatazaka.member
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMember(1));
  }, []);

  return (
    <div>
      <Typography variant="h5">日向坂46</Typography>
      <Typography variant="body1">
        {member?.name} ({member?.age})
      </Typography>
    </div>
  );
};

export default HinatazakaMember;
