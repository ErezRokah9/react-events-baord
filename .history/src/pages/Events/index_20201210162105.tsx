import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
import { EventsDashboard } from 'react-bootstrap'
// import EventsActions, { eventsSelector } from 'actions/redux/events';

interface Props {
	translate: TranslateFunction;
}

class Events extends React.Component<Props> {
	render() {
		return (
			<EventsDashboard></EventsDashboard>
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
