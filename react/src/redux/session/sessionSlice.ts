import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  csrfToken: string;
};

const initialState: State = {
  csrfToken: '',
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setCsrfToken: (state, action: PayloadAction<string>) => {
      state.csrfToken = action.payload;
    },
  },
});

export default sessionSlice;
