import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Member } from '../../../api';
import { hinatazakaApi } from '../../utils/api';

export const getMember = createAsyncThunk<Member, number>(
  'hinatazaka/getMember',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await hinatazakaApi.getMemberId(id);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.value);
    }
  }
);

type State = {
  isPending: boolean;
  member?: Member;
};

const initialState: State = {
  isPending: false,
  member: undefined,
};

const hinatazakaSlice = createSlice({
  name: 'batman',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMember.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getMember.fulfilled, (state, action) => {
      state.isPending = false;
      state.member = action.payload;
    });
    builder.addCase(getMember.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default hinatazakaSlice;
