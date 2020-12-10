import { Events } from 'actions/redux/events/interfaces';
import * as React from 'react';

interface Props {
	event: Events;
}

const EventsDashboard: React.FC<Props> = (props: Props) => {
	const { event } = props;
	return (
		<div>
			{JSON.stringify(event)}
		</div>
	);
};

export default EventsDashboard;
