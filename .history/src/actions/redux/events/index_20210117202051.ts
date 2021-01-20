import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	EventsState, TypesNames, ActionCreator, SetEventsAction, SetFilterEventAction, Event
} from './interfaces';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getEvents: [],
	setEvents: [],
	setFilter: '',
});

export const EventsTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<EventsState>({
	events: [],
	filterEvent: '',
});

/* ------------- Selectors ------------- */

export const eventSelector = {
	getEventList: (state: ApplicationState) => state.event.events
};
// const getEvents = (state: ApplicationState) => state.event.events;
// const getFilter = (state: ApplicationState) => state.event.filterEvent;

/* ------------- Reducers ------------- */

const setEventReducer = (state: ImmutableObject<EventsState>, action: SetEventsAction) => {
	const { events } = action;
	return state.merge({ events });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer < ImmutableObject<any, any>(INITIAL_STATE, {
	[EventsTypes.SET_EVENT]: setEventReducer
});
