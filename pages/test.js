import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

import axios from 'axios';

class Test extends React.Component {

	static async getInitialProps({query}) {
		const postId = query.id

		return {postId};
	}

	render() {
		const {postId} = this.props;
		return (
			<BaseLayout>
				<h1>postId > {postId}</h1>
			</BaseLayout>
		)
	}
}

export default withRouter(Test); 