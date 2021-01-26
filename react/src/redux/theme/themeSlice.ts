import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkTheme: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return { isDarkTheme: !state.isDarkTheme };
    },
  },
});

export default themeSlice;
