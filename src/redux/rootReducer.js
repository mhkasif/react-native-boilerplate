import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import counterReducer from './countSlice/countReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'counter'], // persist both auth and counter slices
};
const rootReducer = combineReducers({
  counter: counterReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const middleware = [thunk];
