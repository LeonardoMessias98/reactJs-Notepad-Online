import { call , put, all, takeLatest} from 'redux-saga/effects';

import { saveFile, deleteFile } from './actions';

function* saveLocal({ note }){
  // yield call(localStorage.setItem(''))
  console.log('entrando em saveLocal')

  yield put(saveFile(note));
}

function* deleteLocal({id}){

  console.log('entrando em deleteLocal');

  yield put(deleteFile(id));
}

export default all([
  takeLatest('SAVE_LOCAL',saveLocal),
  takeLatest('DELETE_LOCAL',deleteLocal)
]);