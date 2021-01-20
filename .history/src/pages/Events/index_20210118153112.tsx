import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
import { Container } from 'react-bootstrap';
import EventsDashboard from 'containers/events/EventsDashboard';
import { Event } from 'actions/redux/events/interfaces';
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
	constructor(props: Props) {
		super(props);
		const { getEventsList, events } = this.props;
		debugger;
		if (events.length === 0) {
			debugger;
			getEventsList();
		}
	}
	componentDidMount() {
		const { getEventsList, events } = this.props;
		debugger;
		if (events.length === 0) {
			debugger;
			getEventsList();
		}
	}
	render() {
		debugger;
		const { events } = this.props;
		return (
			<Container>
				<h1> Dashboard </h1>
				<EventsDashboard event={events} onFilterTextChange={(text: string) => { }} />
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
	(dispatch: Dispatch) => ({
		getEventsList: () => dispatch(EventActions.getEvents())
	}));
