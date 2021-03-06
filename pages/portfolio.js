import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';

import axios from 'axios';

class Portfolio extends React.Component {

	static async getInitialProps() {
		let posts = [];

		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			posts = response.data;
		} catch(err) {
			console.error(err);
		}
		return {posts};
	}

	renderPosts(posts) {
		return posts.map((post) => {
						return(
							<li key={post.id}>
								<Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
									<a>{post.title}</a>
								</Link>
							</li>
						)
					}
				)
	}

	render() {
		const { posts } = this.props;
		return (
			<BaseLayout>
				<h1>Portfolio</h1>
				<ul>
				{ this.renderPosts( posts ) }
				</ul>
			</BaseLayout>
		)
	}
}

export default Portfolio; 