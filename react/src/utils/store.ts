import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../redux/counter/counterSlice';
import themeSlice from '../redux/theme/themeSlice';
import hinatazakaSlice from '../redux/hinatazaka/hinatazakaSlice';
import sessionSlice from '../redux/session/sessionSlice';

const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  theme: themeSlice.reducer,
  counter: counterSlice.reducer,
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
