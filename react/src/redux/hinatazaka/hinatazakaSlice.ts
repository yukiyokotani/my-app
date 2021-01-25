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

export const getMemberId = createAsyncThunk<Member, number>(
  'hinatazaka/getMemberId',
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

export const postMembers = createAsyncThunk<Member, Member>(
  'hinatazaka/postMembers',
  async (member: Member, { rejectWithValue }) => {
    console.log(member);
    try {
      const response = await hinatazakaApi.postMembers(member);
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
    builder.addCase(getMemberId.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getMemberId.fulfilled, (state, action) => {
      state.isPending = false;
      state.member = action.payload;
    });
    builder.addCase(getMemberId.rejected, (state) => {
      state.isPending = false;
    });
    // PostMembers
    builder.addCase(postMembers.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(postMembers.fulfilled, (state, action) => {
      state.isPending = false;
      state.member = action.payload;
    });
    builder.addCase(postMembers.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default hinatazakaSlice;
