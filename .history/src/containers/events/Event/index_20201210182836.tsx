import * as React from 'react';

interface Props {

}

const Event: React.FC<Props> = (props: Props) => {
	const { event } = props;
	return (
		<tr>
				<td>
					<h2>event[0].eventType </h2>
				</td>
				<td>
					{JSON.stringify(event[0])}
				</td>
			</tr>
	);
};

export default Event;
