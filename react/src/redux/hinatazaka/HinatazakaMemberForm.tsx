import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { postMembers } from './hinatazakaSlice';

import { Member } from '../../../api';

const HinatazakaMemberForm: React.FC = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, errors, reset } = useForm<Member>();

  const onValid = useCallback(
    (member: Member) => {
      console.log(member);
      dispatch(postMembers(member));
    },
    [dispatch]
  );

  // const onSubmit = useCallback(() => {
  //   handleSubmit(onValid);
  //   reset();
  // }, [handleSubmit, onValid, reset]);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item md={4}>
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
        <Grid item md={4}>
          <Controller
            control={control}
            name="age"
            defaultValue={0}
            rules={{ required: '必須項目です。' }}
            as={
              <TextField
                label="年齢"
                variant="outlined"
                type="number"
                fullWidth
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            }
          />
        </Grid>
        <Grid item md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onValid)}
          >
            登録
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HinatazakaMemberForm;
