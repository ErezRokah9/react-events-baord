import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';
import EventCom from 'containers/events/Event';

interface Props {
	event: Event;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props;
	return (
		<tr>
			<tr>
				<td>
					<h2>Event Type: { event.eventType} </h2>
				</td>
				<td>
					<h2>Count: </h2>
				</td>
			</tr>
			<tr>
				<EventCom event = {event} />
			</tr>
		</tr>
	);
};

export default EventsDashboard;
