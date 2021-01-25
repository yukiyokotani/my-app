import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getMembers } from './hinatazakaSlice';
import { RootState } from '../../utils/store';
import { Member } from '../../../api';

const HinatazakaMembersList: React.FC = () => {
  const members = useSelector<RootState, Member[] | undefined>(
    (state) => state.hinatazaka.members
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        日向坂46
      </Typography>
      {members?.map((member) => (
        <Typography variant="body1" gutterBottom key={member.id}>
          {member?.name}
        </Typography>
      ))}
    </div>
  );
};

export default HinatazakaMembersList;
