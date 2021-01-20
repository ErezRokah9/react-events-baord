import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
import { Container } from 'react-bootstrap';
import EventsDashboard from 'containers/events/EventsDashboard';

import EventActions, { eventSelector } from 'actions/redux/events';
import { Dispatch } from 'redux';
// import EventActions, { eventSelector } from 'actions/redux/events';

interface Props {
	translate: TranslateFunction;
	events: Event[];
	getEventsList: () => void;
}

class Events extends React.Component<Props> {
	// convertArray: Event[] = sortBy(data, ['eventType']) as any as Event[];
	componentDidMount() {
		const { getEventsList, events } = this.props;
		if (events.length === 0) {
			getEventsList();
		}
	}
	render() {
		const { events } = this.props;
		return (
			<Container>
				<h1> Dashboard </h1>
				<EventsDashboard event={events} />
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
