import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { eventName, EventCount } = props;
	console.log('erez');
	console.log(props);
	return (
		<tr>
			<td>
				{console.log(event)}
				<h2>{eventName} </h2>
			</td>
			<td>
				{EventCount}
			</td>
		</tr>
	);
};

export default Event;
