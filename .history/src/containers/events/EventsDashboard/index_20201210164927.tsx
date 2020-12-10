import { Event } from 'actions/redux/events/interfaces';
import * as React from 'react';

interface Props {
	event: Event;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props[o];
	return (
		<div>
			{JSON.stringify(event)}
		</div>
	);
};

export default EventsDashboard;
