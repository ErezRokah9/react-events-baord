import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';
import Event from 'containers/events/Event';

interface Props {
	event: Event;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props;
	return (
		<tr>
			<tr>
				<td>
					<h2>Event Type: </h2>
				</td>
				<td>
					<h2>Count: </h2>
				</td>
			</tr>
			<tr>
				<Event></Event>
			</tr>
		</tr>
	);
};

export default EventsDashboard;