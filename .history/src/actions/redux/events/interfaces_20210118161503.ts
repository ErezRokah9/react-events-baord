import { Action } from 'redux';

export interface EventsState {
	events: Event[];
	filterEvent: string;
}

export enum TypesNames {
	GET_EVENTS = 'GET_EVENTS',
	SET_EVENTS = 'SET_EVENTS',
	SET_FILTER = 'SET_FILTER',
	LOAD_PRODUCT = 'LOAD_PRODUCT',
}

export interface ActionCreator {
	getEvents: () => Action<TypesNames.GET_EVENTS>;
	setEvents: (events: Event[]) => SetEventsAction;
	setFilter: (filter: string) => SetFilterEventAction;
	loadEvent: () => Action<TypesNames.LOAD_PRODUCT>;
}

export interface SetEventsAction extends Action<TypesNames.SET_EVENTS> {
	events: Event[];
}

export interface SetFilterEventAction extends Action<TypesNames.SET_FILTER> {
	filter: string;
}

export class Event {
	date: string;
	eventType: string;
	fromTime: string;
	id: string;
	title: string;
	toTime: string;
}
