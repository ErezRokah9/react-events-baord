import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';
import EventCom from 'containers/events/Event';
import _ from 'lodash';

interface Props {
	event: Event;
}

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
			{console.log('1')}
			// eslint-disable-next-line no-console
			{Object.entries(groupedEvents).forEach(([eventType, eventList]) => console.log(eventType, eventList))}
			{types.forEach((eventType) => <EventCom key={eventType} event={groupedEvents.eventType} />)}
		</tr>
	);
};

export default EventsDashboard;
