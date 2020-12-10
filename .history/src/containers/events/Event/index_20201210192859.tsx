import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { event } = props;
	return (
		<tr>
			<td>
				<h2>{event.eventType} </h2>
			</td>
			<td>
				{event.id)}
			</td>
		</tr>
	);
};

export default Event;
