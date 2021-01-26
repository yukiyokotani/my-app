import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
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
      <Box display="flex">
        <Box flexGrow={1}>
          <Typography variant="h4" gutterBottom>
            日向坂46
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={() => dispatch(getMembers())}>
            <CachedIcon color="primary" />
          </IconButton>
        </Box>
      </Box>
      {members?.map((member) => (
        <Typography variant="body1" gutterBottom key={member.id}>
          {member?.name}
        </Typography>
      ))}
    </div>
  );
};

export default HinatazakaMembersList;
