import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { event } = props;
	console.log('erez');
	console.log(props);
	return (
		<tr>
			<td>
				{console.log(event)}
				<h2>{event} </h2>
			</td>
			<td>
				{event}
			</td>
		</tr>
	);
};

export default Event;
