import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { event } = props;
	console.log('erez');
	console.log(props);
	return (
		<tr>
			<td>
				{console.log(event)}
				<h2>{event.eventType} </h2>
			</td>
			<td>
				{event.id}
			</td>
		</tr>
	);
};

export default Event;
