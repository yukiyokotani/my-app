import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Show, Entry } from '../../interfaces';

export const fetchAllBatmanTvShow = createAsyncThunk(
  'batman/fetchAllTvShow',
  async () => {
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=batman'
    );
    const data: Entry[] = await response.json();
    return data.map((entry) => entry.show);
  }
);

type State = {
  shows: Show[];
};

const initialState: State = {
  shows: [],
};

const batmanSlice = createSlice({
  name: 'batman',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBatmanTvShow.fulfilled, (state, action) => {
      state.shows = action.payload;
    });
  },
});

export default batmanSlice;
