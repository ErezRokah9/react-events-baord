import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';

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
				<td>
					<h2>Event Type: </h2>
				</td>
				<td>
					{JSON.stringify(event[0])}
				</td>
			</tr>
		</tr>
	);
};

export default EventsDashboard;
