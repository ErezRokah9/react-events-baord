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
					<h2>Event Type:</h2>
				</td>
				<td>
					<h2>Count: </h2>
				</td>
			</tr>
			{event.map((item) => <EventCom key={item.id} event={item} />)}
			{console.log(_.groupBy(event, function(item) {return item.make;});)}
		</tr>
	);
};

export default EventsDashboard;
