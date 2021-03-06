import { Action } from 'redux';

export interface EventsState {
	exampleData: string;
}

export enum TypesNames {
	SET_EXAMPLE = 'SET_EXAMPLE'
}

export interface ActionCreator {
	setExample: (exampleData: string) => EventsAction;
}

export interface EventsAction extends Action<TypesNames.SET_EXAMPLE> {
	exampleData: string;
}

export class Event {
	id: string;
	title: string;
	eventType: string;
	date: string;
	fromTime: string;
	toTime: string;
}
