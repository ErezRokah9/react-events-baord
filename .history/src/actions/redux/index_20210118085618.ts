import { combineReducers, Reducer } from 'redux';

import baseReducers, { BaseApplicationState } from '@base/features/base-reducers';
import { CatalogState } from './catalog/interfaces';
import { CartState } from './cart/interfaces';
import { EventsState } from './events/interfaces';

export interface ApplicationState extends BaseApplicationState {
	[x: string]: any;
	cart: CartState;
	catalog: CatalogState;
	event: EventsState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	...baseReducers,

	cart: require('./cart').reducer,
	catalog: require('./catalog').reducer,
	event: require('./events').reducer
});

export default rootReducer;
