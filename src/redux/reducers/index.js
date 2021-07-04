
import { combineReducers } from 'redux';

import auth from './auth'
import talentProfile from './profileTalent';
import skills from './skills'
import experience from './getExperience';
import portofolio from './getPortofolio'
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
  talentProfile,
  skills,
  experience,
  portofolio,
  talent,
  recruiter
})

export default reducer
