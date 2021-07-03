
import { combineReducers } from 'redux';

import auth from './auth'
import recruiter from './recruiter'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import talent from './talent';

const persistAuth = {
  storage,
  key: 'auth'
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  talent,
  recruiter
})

export default reducer
