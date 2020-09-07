import React from 'react';

import Layout from 'src/components/layout';
// import SEO from "../components/seo"

export default function IndexPage({ data }) {
	return (
		<Layout>
			<div style={{ padding: '30px' }}>
				컴포넌트 작업 진행상황
				<ol>
					<li>Badges</li>
					<li style={{ textDecoration: 'line-through' }}>Button</li>
					<li>
						Form
						<ul>
							<li style={{ textDecoration: 'line-through' }}>textarea</li>
							<li style={{ textDecoration: 'line-through' }}>file</li>
							<li>number</li>
							<li>search</li>
							<li style={{ textDecoration: 'line-through' }}>checkbox</li>
							<li>ip input</li>
						</ul>
					</li>
					<li style={{ textDecoration: 'line-through' }}>InputGroup</li>
					<li>Pagination</li>
					<li>Table</li>
					<li>Tab</li>
					<li>Tooltip</li>
					<li>Select</li>
					<li>Spinner</li>
					<li>Modal</li>
					<li>Grid</li>
				</ol>
			</div>
		</Layout>
	);
}
