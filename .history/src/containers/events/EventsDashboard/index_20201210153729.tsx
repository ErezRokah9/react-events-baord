import { Events } from 'actions/redux/events/interfaces';
import * as React from 'react';

interface Props {
	events: Events;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	return (
		<div>
			{JSON.stringify(props[0])}
		</div>
	);
};

export default EventsDashboard;
