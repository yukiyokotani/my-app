import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Member } from '../../../api';
import { hinatazakaApi } from '../../utils/api';

export const getMembers = createAsyncThunk<Member[]>(
  'hinatazaka/getMembers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await hinatazakaApi.getMembers();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.value);
    }
  }
);

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
  members?: Member[];
  member?: Member;
};

const initialState: State = {
  isPending: false,
  members: undefined,
};

const hinatazakaSlice = createSlice({
  name: 'hinatazaka',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetMembers
    builder.addCase(getMembers.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.isPending = false;
      state.members = action.payload;
    });
    builder.addCase(getMembers.rejected, (state) => {
      state.isPending = false;
    });
    // GetMember
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
