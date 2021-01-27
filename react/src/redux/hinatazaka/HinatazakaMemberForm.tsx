import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { unwrapResult } from '@reduxjs/toolkit';
import { postMembers } from './hinatazakaSlice';

import { Member } from '../../../api';
import { AppDispatch } from '../../utils/store';

const HinatazakaMemberForm: React.FC = () => {
  // Hooks 定義
  const { enqueueSnackbar } = useSnackbar();
  const dispatch: AppDispatch = useDispatch();
  const { control, handleSubmit, errors, reset } = useForm<Member>();

  // メソッド定義
  const onPostMembers = useCallback(
    async (member: Member) => {
      try {
        await dispatch(postMembers(member)).then(unwrapResult);
        enqueueSnackbar('メンバーを追加しました。', { variant: 'success' });
        reset({ name: '' });
      } catch (err) {
        enqueueSnackbar('メンバーの追加に失敗しました。', { variant: 'error' });
      }
    },
    [dispatch, enqueueSnackbar, reset]
  );

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h4">新規メンバー登録</Typography>
        </Grid>
        <Grid item md={6}>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            rules={{ required: '必須項目です。' }}
            as={
              <TextField
                label="名前"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            }
          />
        </Grid>
        <Grid item md={6}>
          <Controller
            control={control}
            name="age"
            defaultValue={20}
            rules={{ required: '必須項目です。' }}
            as={
              <TextField
                label="年齢"
                variant="outlined"
                type="number"
                disabled
                fullWidth
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            }
          />
        </Grid>
        <Grid item md={12} container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onPostMembers)}
          >
            登録
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HinatazakaMemberForm;
