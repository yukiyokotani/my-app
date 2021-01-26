import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton, Card, Grid } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import ClearIcon from '@material-ui/icons/Clear';
import { useSnackbar } from 'notistack';
import { deleteMembersId, getMembers } from './hinatazakaSlice';
import { RootState } from '../../utils/store';
import { Member } from '../../../api';

const HinatazakaMembersList: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const members = useSelector<RootState, Member[] | undefined>(
    (state) => state.hinatazaka.members
  );

  const deleteMember = useCallback(
    async (id: number) => {
      if (id === -1) return;
      const strId = id.toString();
      try {
        await dispatch(deleteMembersId(strId));
        enqueueSnackbar('メンバーを削除しました。', { variant: 'success' });
      } catch (err) {
        enqueueSnackbar('メンバーの削除に失敗しました。', { variant: 'error' });
      }
    },
    [dispatch, enqueueSnackbar]
  );

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <div>
      <Box display="flex" alignItems="center" mb={2}>
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
      <Grid container spacing={1}>
        {members?.map((member) => (
          <Grid item xl={12} xs={12} key={member.id}>
            <Card variant="outlined">
              <Box display="flex" alignItems="center">
                <Box p={1} flexGrow={1}>
                  <Typography variant="body1">{member.name}</Typography>
                </Box>
                <Box>
                  <IconButton
                    disabled={member.id === undefined}
                    onClick={() => deleteMember(member.id ?? -1)}
                  >
                    <ClearIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HinatazakaMembersList;
