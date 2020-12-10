import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
import data from 'actions/redux/events/events-list.json';
import { Container } from 'react-bootstrap';
import EventsDashboard from 'containers/events/EventsDashboard';
// import EventsActions, { eventsSelector } from 'actions/redux/events';

interface Props {
	translate: TranslateFunction;
}

class Events extends React.Component<Props> {
	const convertArray = JSON.stringify(data.entries());
	const newData = new Map(JSON.parse(convertArray));
	render() {
		return (
			<Container>
				<h1> Dashboard </h1>
				<EventsDashboard event={newData} />
			</Container>
		);
	}
}

export default baseConnect(Events,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	});
