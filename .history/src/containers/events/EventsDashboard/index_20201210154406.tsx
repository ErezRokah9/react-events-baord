import { Events } from 'actions/redux/events/interfaces';
import * as React from 'react';

interface Props {
	events: Events;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const event = props[0];
	return (
		<div>
			{JSON.stringify(event)}
		</div>
	);
};

export default EventsDashboard;
