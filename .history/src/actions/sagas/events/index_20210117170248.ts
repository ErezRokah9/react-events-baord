import { all, fork, takeLatest } from 'redux-saga/effects';
import * as Sagas from './sagas';
// import { EventsTypes } from 'actions/redux/events';
// import {  } from 'actions/redux/events/interfaces';

function* watchMySaga() {
	// yield takeLatest(EventsTypes.MY_SAGA, Sagas.mySaga);
}

function* eventsSaga() {
	yield all([
		fork(watchMySaga)
	]);
}

// TODO: Add your new saga to index file
export default eventsSaga;