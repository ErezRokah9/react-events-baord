import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';
import EventCom from 'containers/events/Event';
import _ from 'lodash';

interface Props {
	event: Event[];
}

interface State {
	eventTypeToDisplay: string;
}

class EventsDashboard extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			eventTypeToDisplay: ''
		};

		this.handleDisplayEvent = this.handleDisplayEvent.bind(this);
	}

	handleDisplayEvent(eventType: string) {
		this.setState({ eventType });
	}

	render() {
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
