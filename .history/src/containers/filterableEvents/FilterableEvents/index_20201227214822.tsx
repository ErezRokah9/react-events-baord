import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
	eventTypeToDisplay: string;
	onFilterTextChange: (text: string) => void;
}

const FilterableEvents: React.FC<Props> = (props: Props) => {
	const { eventTypeToDisplay, onFilterTextChange } = props;
	function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextChange(e.target.value.toString());
	}
	return (
		<div>
			Insert yours event type to display:  {eventTypeToDisplay}
			<Form>
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Search..."
						value={eventTypeToDisplay}
						onChange={handleFilterTextChange}
					/>
				</Form.Group>
			</Form>
		</div>
	);
};

export default FilterableEvents;
