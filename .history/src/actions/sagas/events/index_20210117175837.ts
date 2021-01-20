import { all, fork, takeLatest } from 'redux-saga/effects';
import * as Sagas from './sagas';
import { EventsTypes } from 'actions/redux/events';
import { Event } from 'actions/redux/events/interfaces';

function* watchEventsSaga() {
	yield takeLatest(EventsTypes.GET_EVENTS, Sagas.getProductSaga);
}

function* eventsSaga() {
	yield all([
		fork(watchEventsSaga)
	]);
}

// TODO: Add your new saga to index file
export default eventsSaga;
