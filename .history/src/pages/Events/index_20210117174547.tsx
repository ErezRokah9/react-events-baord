import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
import data from 'actions/redux/events/events-list.json';
import { Container } from 'react-bootstrap';
import EventsDashboard from 'containers/events/EventsDashboard';
import { sortBy } from 'lodash';
import EventActions, { eventSelector } from 'actions/redux/events';
import { Dispatch } from 'redux';
//import EventActions, { eventSelector } from 'actions/redux/events';

interface Props {
	translate: TranslateFunction;
	events: Event[];
}

class Events extends React.Component<Props> {
	convertArray: Event[] = sortBy(data, ['eventType']) as any as Event[];
	
	render() {
		return (
			<Container>
				<h1> Dashboard </h1>
				<EventsDashboard event={this.convertArray} />
			</Container>
		);
	}
}

export default baseConnect(Events,
	(state: ApplicationState) => {
		return {
			events: eventSelector.getEventList(state)
		};
	},
	(dispatch: Dispatch) => {
		return {
			getEventList: () => dispatch(EventActions.getEvents)
		};
	});
