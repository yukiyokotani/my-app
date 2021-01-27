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

export const deleteMembersId = createAsyncThunk<Member, string>(
  'hinatazaka/deleteMembersId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await hinatazakaApi.deleteMembersId(id);
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
  isFetching: boolean;
  members: Member[];
  member?: Member;
};

const initialState: State = {
  isPending: false,
  isFetching: false,
  members: [],
};

const hinatazakaSlice = createSlice({
  name: 'hinatazaka',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GetMembers
    builder.addCase(getMembers.pending, (state) => {
      state.isPending = true;
      state.isFetching = true;
    });
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.isPending = false;
      state.isFetching = false;
      const sortedMembers = action.payload.sort(
        (a, b) => (a.id ?? -1) - (b.id ?? -1)
      );
      state.members = sortedMembers;
    });
    builder.addCase(getMembers.rejected, (state) => {
      state.isPending = false;
      state.isFetching = false;
    });
    // GetMembersId
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
      state.members = [...state.members, action.payload];
    });
    builder.addCase(postMembers.rejected, (state) => {
      state.isPending = false;
    });
    // DeleteMembersId
    builder.addCase(deleteMembersId.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(deleteMembersId.fulfilled, (state, action) => {
      state.isPending = false;
      const newMembers = state.members.filter(
        (m) => m.id !== parseInt(action.meta.arg, 10)
      );
      state.members = newMembers;
    });
    builder.addCase(deleteMembersId.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default hinatazakaSlice;
