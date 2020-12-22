import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../redux/counter/counterSlice';
import themeSlice from '../redux/theme/themeSlice';
import hinatazakaSlice from '../redux/hinatazaka/hinatazakaSlice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
  hinatazaka: hinatazakaSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
