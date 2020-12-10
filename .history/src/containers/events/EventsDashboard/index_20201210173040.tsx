import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';

interface Props {
	event: Event;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props;
	return (
		<tr>
			{JSON.stringify(event[0])}
		</tr>
	);
};

export default EventsDashboard;