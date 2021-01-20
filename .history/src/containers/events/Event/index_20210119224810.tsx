import * as React from 'react';

const Event: React.FC<Props> = (props: Props) => {
	const { eventName, eventCount } = props;
	return (
		<div>
			<td>
				<h2>{eventName} </h2>
			</td>
			<td>
				{eventCount}
			</td>
		</div>
	);
};

export default Event;
