import { put } from 'redux-saga/effects';
import EventsActions, { EventsTypes } from 'actions/redux/events';
import { Event } from 'actions/redux/events/interfaces';
import data from './events-list.json';
import { sortBy } from 'lodash';

export function* getProductSaga() {
	const events: Event[] = [];
	yield put(EventsActions.setEvents(response.data));
}

