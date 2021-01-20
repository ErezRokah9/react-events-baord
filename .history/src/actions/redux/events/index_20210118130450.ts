import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	EventsState, TypesNames, ActionCreator, SetEventsAction
} from './interfaces';
import { persistReducer } from 'redux-persist';
import { AnyAction } from 'redux';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getEvents: [],
	setEvents: [],
	setFilter: [],
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

const productReducer = createReducer<any, AnyAction>(INITIAL_STATE, {
	[EventsTypes.SET_EVENTS]: setEventReducer,
	[EventsTypes.SET_FILTER]: setFilterProductReducer,
	[EventsTypes.GET_EVENTS]: setErrorReducer,
});

const persistConfig = {
	key: 'event',
	storage: localStorage,
	whitelist: ['events']
};

export const reducer = persistReducer(persistConfig, productReducer);
