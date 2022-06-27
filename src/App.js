import { useState, useEffect, useCallback } from 'react';
import About from './components/About';
import History from './components/History';
import LaunchSites from './components/LaunchSites';
import Vehicles from './components/Vehicles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function App() {
	const [data, setData] = useState(null);

	const fetchData = useCallback(async (query = '') => {
		console.log(`Fetching ${query} data`);
		setData(false);
		try {
			const res = await fetch(`https://api.spacexdata.com/v4/${query}`);
			const data = await res.json();
			setData(data);
			return data;
		} catch (err) {
			alert(`Error fetching ${query} data, try again later`);
			return false;
		}
	}, []);

	useEffect(() => {
		console.log('App intiliazed');
		fetchData('company');
	}, [fetchData]);

	const findLinkName = (list = {}, query = '') => {
		if (query && Object.keys(list).length > 0) {
			let myStr = Object.keys(list)[
				Object.values(list).findIndex((el) => el === query)
			].replaceAll('_', ' ');
			return myStr
				.toLowerCase()
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
				.join(' ');
		} else {
			return 'Link';
		}
	};
	return (
		<Router>
			<section className="">
				<div className="container my-4 g-0">
					<Navbar
						className="text-uppercase fs-3 fw-bold rounded-top navbar-lights"
						bg="light"
						variant="light"
						defaultactivekey="/"
						expand="lg"
					>
						<Container className=" text-decoration-none gx-md-1 gx-0 nav-fill">
							<Navbar.Brand href="#home" className="">
								{' '}
								<img
									src="./logo.png"
									width="240"
									className="d-inline-block align-top ps-4"
									alt="React Bootstrap logo"
								/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4" />
							<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
								<Nav.Item id="home">
									<Nav.Link as={Link} to="/">
										About
									</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link as={Link} to="/history">
										History
									</Nav.Link>
								</Nav.Item>
								<Nav.Item id="link-2">
									<Nav.Link as={Link} to="/vehicles">
										Vehicles
									</Nav.Link>
								</Nav.Item>
								<Nav.Item id="link-3">
									<Nav.Link as={Link} to="/launch_sites">
										Launch Sites
									</Nav.Link>
								</Nav.Item>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					{data !== null && (
						<div>
							<Routes>
								<Route
									path="/"
									exact
									element={
										<About
											data={data}
											findLinkName={findLinkName}
											fetchData={fetchData}
										/>
									}
								/>
							</Routes>
							<Routes>
								<Route
									path="/history"
									exact
									element={
										<History
											data={data}
											findLinkName={findLinkName}
											fetchData={fetchData}
										/>
									}
								/>
							</Routes>
							<Routes>
								<Route
									path="/vehicles"
									exact
									element={
										<Vehicles
											data={data}
											findLinkName={findLinkName}
											fetchData={fetchData}
										/>
									}
								/>
							</Routes>
							<Routes>
								<Route
									path="/launch_sites"
									exact
									element={
										<LaunchSites
											data={data}
											findLinkName={findLinkName}
											fetchData={fetchData}
										/>
									}
								/>
							</Routes>
						</div>
					)}
				</div>
			</section>
		</Router>
	);
}
export default App;
