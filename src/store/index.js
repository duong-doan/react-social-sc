import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from 'modules/auth/store/slice';
import movieReducer from 'modules/movies/store/slice';
import rootSaga from './saga';
import { throwMiddleware } from './middleware';
import history from 'utils/history';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
      throwMiddleware
    ),
});

sagaMiddleware.run(rootSaga, history);
