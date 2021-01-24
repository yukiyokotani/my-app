import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getMembers } from './hinatazakaSlice';
import { RootState } from '../../utils/store';
import { Member } from '../../../api';

const HinatazakaMember: React.FC = () => {
  const members = useSelector<RootState, Member[] | undefined>(
    (state) => state.hinatazaka.members
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  return (
    <div>
      <Typography variant="h5">日向坂46</Typography>
      {members?.map((member) => (
        <Typography variant="body1" key={member.id}>
          {member?.name}
        </Typography>
      ))}
    </div>
  );
};

export default HinatazakaMember;
