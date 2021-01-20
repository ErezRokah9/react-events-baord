import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { eventName, eventCount } = props;
	return (

		<tr>
			<td>
				<h2>{eventName} </h2>
			</td>
			<td>
				{eventCount}
			</td>
		</tr>

	);
};

export default Event;
