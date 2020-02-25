import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Blog extends React.Component {

	static async getInitialProps() {
		 
	}

	render() {
		return (
			<BaseLayout>
				<h1>Blog</h1>
			</BaseLayout>
		)
	}
}

export default Blog; 