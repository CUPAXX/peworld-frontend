
import { combineReducers } from 'redux';

import auth from './auth'
import recruiter from './recruiter'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistAuth = {
  storage,
  key: 'auth'
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  recruiter
})

export default reducer
