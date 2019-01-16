import React from 'react';
import './css/Home.css'

import blob from './assets/RM_blob.png'

const Home = () => {
	return (
		<div className="home-container">
			<p className="home-body">
			Roski Mag is a student run <br />
			publication at the University <br />
			of Southern California. We <br />
			showcase student art and <br />
			design work.
			</p>

			<div className="home-apply">
				<img src={blob} alt="blob" className="home-vector1" />
				<a className="home-apply-link" href="https://roskimag.typeform.com/to/xc4TCO">apply here</a>
			</div>
		</div>
	);
}

export default Home;