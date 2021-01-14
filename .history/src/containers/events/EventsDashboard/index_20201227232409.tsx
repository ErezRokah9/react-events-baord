import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';
import EventCom from 'containers/events/Event';
import _ from 'lodash';
import FilterableEvents from 'containers/filterableEvents/FilterableEvents';

interface Props {
	event: Event[];
	onFilterTextChange: (text: string) => void;
}

interface State {
	eventTypeToDisplay: string;
	types: object[]
	;
}

class EventsDashboard extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			eventTypeToDisplay: 'Dummy value',
			types: ['birthday', 'wedding', 'meeting']
		};

		this.handleDisplayEvent = this.handleDisplayEvent.bind(this);
	}

	handleDisplayEvent(eventTypeToDisplay: string) {
		this.setState({ eventTypeToDisplay });
	}

	render() {
		const { event } = this.props;
		const { eventTypeToDisplay, types } = this.state;
		const groupedEvents = _.groupBy(event, (item) => item.eventType);
		return (
			<tr>
				<tr>
					<td>
						<FilterableEvents
							eventTypeToDisplay={eventTypeToDisplay}
							onFilterTextChange={this.handleDisplayEvent}
						/>
					</td>
				</tr>
				<tr>
					<td>
						<h2>Event Type:</h2>
					</td>
					<td>
						<h2>Count: </h2>
					</td>
				</tr>
				{types.map((item) => <EventCom key={item} eventName={item} eventCount={groupedEvents[item].length} />)}
			</tr>
		);
	}
}

/*
const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props;
	const groupedEvents = _.groupBy(event, (item) => item.eventType);
	const types = ['birthday', 'wedding', 'meeting'];
	return (
		<tr>
			<tr>
				<td>
					<h2>Event Type:</h2>
				</td>
				<td>
					<h2>Count: </h2>
				</td>
			</tr>
			{types.map((item) => <EventCom key={item} eventName={item} eventCount={groupedEvents[item].length} />)}
		</tr>
	);
};
*/

export default EventsDashboard;
