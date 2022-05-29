import { call,put,takeEvery } from 'redux-saga/effects';
import axios from 'axios';

  export function* watchAddUser(){
    yield takeEvery('LOGIN_USER',postUser);
  }

  export function* watchPostReports(){
    yield takeEvery('POST_REPORTS',postReports);
  }

  export function* watchGetBranches(){
    yield takeEvery('GET_BRANCHES',getBranches);
  }

  export function* watchGetSpeciality(){
    yield takeEvery('GET_SPECIALITY',getSpeciality);
  }

  export function* watchGetSpecialist(){
    yield takeEvery('GET_SPECIALIST',getSpecialist);
  }

  function* getSpecialist(action){
    try{
      const res = yield call(axios.get,"http://tanjer.dyndns.org:9005/heartbeat/api/commonservices/getAllDoctorsInDepartment?office_id="+action.officeId+"&department_id="+action.deptId+"&access_token="+action.token)
      yield put({type:'GET_SPECIALIST_INFO',getInfo : res.data});
    }
    catch (e) { console.log('error....',e) }
  }

  function* getSpeciality(action){
    try{
      const res = yield call(axios.get,"http://tanjer.dyndns.org:9005/heartbeat/api/commonservices/getAllMedicalDepartments?office_id="+action.payload+"&access_token="+action.token)
      yield put({type:'GET_SPECIALITY_INFO',getInfo : res.data});
    }
    catch (e) { console.log('error....',e) }
  }

  function* getBranches(action){
    try{
      const res = yield call(axios.get,"http://tanjer.dyndns.org:9005/heartbeat/api/commonservices/getAllOfficeBranches?access_token="+action.token)
      yield put({type:'GET_BRANCHES_INFO',getInfo : res.data});
    }
    catch (e) { console.log('error....',e) }
  }

  function* postUser(action){
    try{
      console.log("inside..post user..",action.payload)
      const res = yield call(axios.post,"http://localhost:8000/user",action.payload)
      yield put({type:'LOGIN_USER_INFO',postInfo : res.data});
    }
    catch (e) { console.log('error...',e) }
  }

  function* postReports(action){
    try{
      console.log("inside..post user..",action.payload)
      const res = yield call(axios.post,"http://tanjer.dyndns.org:9005/heartbeat/api/appointmentservices/getPatientAppointmentsWithDetails?access_token="+action.token,action.payload)
      yield put({type:'POST_REPORTS_INFO',postInfo : res.data});
    }
    catch (e) { console.log('error...',e) }
  }