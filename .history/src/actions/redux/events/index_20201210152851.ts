import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	EventsState, TypesNames, ActionCreator, EventsAction
} from './interfaces';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	setExample: ['exampleData']
});

export const EventsTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<EventsState>({
	exampleData: 'Initial Data Example'
});

/* ------------- Selectors ------------- */

export const eventsSelector = {
	getExampleData: (state: ApplicationState) => state.events.exampleData
};

/* ------------- Reducers ------------- */

const setExampleReducer = (state: ImmutableObject<EventsState>, action: EventsAction) => {
	const { exampleData } = action;
	return state.merge({ exampleData });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<ImmutableObject<any, any>(INITIAL_STATE, {
	[EventsTypes.SET_EXAMPLE]: setExampleReducer
});
