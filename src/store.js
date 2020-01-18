import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage
}

const middleWareList = applyMiddleware(reduxThunk);

const persistReducers = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  persistReducers,
  compose(
    middleWareList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export const persistor = persistStore(store);