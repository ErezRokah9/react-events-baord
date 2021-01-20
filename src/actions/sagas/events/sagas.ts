import { put } from 'redux-saga/effects';
import EventsActions from 'actions/redux/events';
import { Event } from 'actions/redux/events/interfaces';
import data from './events-list.json';
import { sortBy } from 'lodash';

export function* getEventSaga() {
	const mockEventList: Event[] = sortBy(data, ['eventType']) as Event[];
	yield put(EventsActions.setEvents(mockEventList));
}

