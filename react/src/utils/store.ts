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

// Promiseを返すようにする
// https://react-redux.js.org/using-react-redux/static-typing#typing-the-usedispatch-hook
export type AppDispatch = typeof store.dispatch;

export default store;
