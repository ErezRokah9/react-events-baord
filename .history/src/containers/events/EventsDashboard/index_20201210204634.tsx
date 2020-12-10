import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';
import EventCom from 'containers/events/Event';
import _ from 'lodash';

interface Props {
	event: Event;
}

const types = ['birthday', 'wedding', 'meeting'];

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props;
	const groupedEvents = _.groupBy(event, item => { item.eventType });
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
			{groupedEvents.forEach(function (value) { console.log(value); })}
			{event.map((item) => <EventCom key={item.id} event={item} />)}
			{console.log(_.groupBy(event, function (item) { return item.eventType; }))}
			{console.log(groupedEvents.birthday)}
		</tr>
	);
};

export default EventsDashboard;