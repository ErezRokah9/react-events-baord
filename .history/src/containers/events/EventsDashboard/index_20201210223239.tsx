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
	const exc = { eventType: 'meeting', fromTime: '2019-23-04 10:21:45', id: '5fcde8138a1de3f2f24b42fc' };
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
			{Object.entries(groupedEvents).forEach(([eventType, eventList]) => console.log(eventType, eventList))}
			<EventCom event={exc} />
			{types.map((item) => <EventCom key={item} event={groupedEvents.item} />)}
		</tr>
	);
};

export default EventsDashboard;
