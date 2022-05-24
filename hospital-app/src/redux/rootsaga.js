
import { all } from 'redux-saga/effects';
import { watchPostReports, watchAddUser, watchGetBranches, watchGetSpeciality, watchGetSpecialist } from './saga'; 

export default function * rootSaga(){
  yield all([
    watchPostReports(),
    watchAddUser(),
    watchGetBranches(),
    watchGetSpeciality(),
    watchGetSpecialist()
  ])
}