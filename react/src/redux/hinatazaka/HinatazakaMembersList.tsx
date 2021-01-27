import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton, Card, Grid } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import ClearIcon from '@material-ui/icons/Clear';
import { Skeleton } from '@material-ui/lab';
import { useSnackbar } from 'notistack';
import { unwrapResult } from '@reduxjs/toolkit';
import { deleteMembersId, getMembers } from './hinatazakaSlice';
import { AppDispatch, RootState } from '../../utils/store';
import { Member } from '../../../api';

const HinatazakaMembersList: React.FC = () => {
  // Hooks 定義
  const { enqueueSnackbar } = useSnackbar();
  const dispatch: AppDispatch = useDispatch();

  // State 定義
  const isFetching = useSelector<RootState, boolean | undefined>(
    (state) => state.hinatazaka.isFetching
  );

  const members = useSelector<RootState, Member[] | undefined>(
    (state) => state.hinatazaka.members
  );

  // メソッド定義
  const deleteMember = useCallback(
    async (id: number) => {
      if (id === -1) return;
      const strId = id.toString();
      try {
        await dispatch(deleteMembersId(strId)).then(unwrapResult);
        enqueueSnackbar('メンバーを削除しました。', { variant: 'success' });
      } catch (err) {
        enqueueSnackbar('メンバーの削除に失敗しました。', { variant: 'error' });
      }
    },
    [dispatch, enqueueSnackbar]
  );

  // 副作用定義
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const skeltonList = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((_, index) => (
          // 静的なマップなのでindexをkeyにしてよい
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xl={12} xs={12} key={index}>
            <Skeleton variant="text" height={50} />
          </Grid>
        )),
    []
  );

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
        {isFetching
          ? skeltonList
          : members?.map((member) => (
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
