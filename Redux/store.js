import {createStore} from 'redux';
import storeReducer from './reducer';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist:['']
};
const persistedReducer = persistReducer(persistConfig, storeReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
