import * as React from 'react';

interface Props {
	eventTypeToDisplay: string;
}

const FilterableEvents: React.FC<Props> = (props: Props) => {
	const { eventTypeToDisplay } = props;
	return (
		<div>
			eventTypeToDisplay {eventTypeToDisplay}
		</div>
	);
};

export default FilterableEvents;
