import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { TranslateFunction } from 'react-localize-redux';
// import EventsActions, { eventsSelector } from 'actions/redux/events';

interface Props {
	translate: TranslateFunction;
}

class Events extends React.Component<Props> {
	render() {
		return (
			<div>
				Events New Container
			</div>
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
