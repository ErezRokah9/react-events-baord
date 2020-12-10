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
		</tr>
	);
};

export default EventsDashboard;
