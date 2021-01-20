import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	EventsState, TypesNames, ActionCreator, SetEventsAction
} from './interfaces';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import { AnyAction } from 'redux';
import { createSelector } from 'reselect';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getEvents: [],
	setEvents: [],
	setFilter: [],
	loadEvent: [],
});

export const EventsTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<EventsState>({
	events: [],
	filterEvent: '',
});

/* ------------- Selectors ------------- */
const getEvents = (state: ApplicationState) => state.event.events;
const getEventsList = (events: Event[]) => {return events};


const getEventsSelector = createSelector(
	[getEvents],
	getEventsList
);

export const eventSelector = {
	getEventsList: getEventsSelector
};

// const getFilter = (state: ApplicationState) => state.event.filterEvent;

/* ------------- Reducers ------------- */

const setEventReducer = (state: ImmutableObject<EventsState>, action: SetEventsAction) => {
	const { events } = action;
	return state.merge({ events });
};

/* ------------- Hookup Reducers To Types ------------- */

const productReducer = createReducer<any, AnyAction>(INITIAL_STATE, {
	[EventsTypes.SET_EVENTS]: setEventReducer,
});

const persistConfig = {
	key: 'event',
	storage: localStorage,
	whitelist: ['events']
};

export const reducer = persistReducer(persistConfig, productReducer);
