import { useState, useEffect } from 'react';
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
	// const [page, setPage] = useState('company')
	useEffect(() => {
		console.log('App intiliazed');
		fetchData('company')
	}, []);

	// useEffect(() => {
	// 	console.log('Page updated')
	// 	fetchData(page)
	// }, [page]);

	const fetchData = async (query = '') => {
		console.log(`Fetching ${query} data`);
		setData({})
		try {
			const res = await fetch(`https://api.spacexdata.com/v4/${query}`);
			const data = await res.json();
			setData(data);
		} catch (err) {
			alert(`Error fetching ${query} data, try again later`);
		}
	};

	const findLinkName = (list = {}, query = '') => {
		if (list &  query & Object.keys(list).length & Object.values(list).length) {
			let myStr = Object.keys(list)[
				Object.values(list).findIndex((el) => el === query)
			].replaceAll('_', ' ');
			return myStr
				.toLowerCase()
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
				.join(' ');
		} else {
			return false;
		}
	};
	return (
		<Router>
			<section className="">
				<div className="container my-4 g-0">
					<Navbar
						className="text-uppercase fs-3 fw-bold rounded-top"
						bg="light"
						defaultActiveKey="/home"
					>
						<Container className=" text-decoration-none justify-content-evenly gx-1 nav-fill">
							<Nav.Item id="home">
								<Nav.Link as={Link} to="/">
									About SpaceX
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
						</Container>
					</Navbar>
					{data !== null && (
						<div>
							<Routes>
								<Route
									path="/"
									exact
									element={<About data={data} findLinkName={findLinkName} fetchData={fetchData}/>}
								/>
							</Routes>
							<Routes>
								<Route
									path="/history"
									exact
									element={<History data={data} findLinkName={findLinkName} fetchData={fetchData}/>}
								/>
							</Routes>
							<Routes>
								<Route
									path="/vehicles"
									exact
									element={<Vehicles data={data} findLinkName={findLinkName} fetchData={fetchData}/>}
								/>
							</Routes>
							<Routes>
								<Route
									path="/launch_sites"
									exact
									element={
										<LaunchSites data={data} findLinkName={findLinkName} fetchData={fetchData}/>
									}
								/>
							</Routes>{' '}
						</div>
					)}
				</div>
			</section>
		</Router>
	);
}
export default App;
