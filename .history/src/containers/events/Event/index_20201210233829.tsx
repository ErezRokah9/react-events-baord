import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { eventName, eventCount } = props;
	console.log('erez');
	console.log(props);
	return (
		<tr>
			<td>
				{console.log(eventName)}
				<h2>{eventName} </h2>
			</td>
			<td>
				{console.log(eventCount)}
				{eventCount}
			</td>
		</tr>
	);
};

export default Event;
