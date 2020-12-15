import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../redux/counter/counterSlice';
import themeSlice from '../redux/theme/themeSlice';
import batmanSlice from '../redux/batman/batmanSlice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
  batman: batmanSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
