import { useState, useEffect } from 'react';
import Main from './components/Main';
import Data from './components/Data';
import History from './components/History';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {Link}  from 'react-router-dom';

function App() {
	const [data, setData] = useState({});
	useEffect(() => {
		const getCompanyData = async () => {
			const getDataApi = await fetchData('company');
			setData(getDataApi);
		};
		getCompanyData();
	}, []);

	const fetchData = async (query = '') => {
		const res = await fetch(`https://api.spacexdata.com/v4/${query}`);
		const data = await res.json();
		return data;
	};
	return (
		<Router>
			<section className="">
				<div className="container my-4">
					<Nav
						className="text-uppercase text-dark fs-3 fw-bold text-primary row gx-1"
						fill
						variant="tabs"
						defaultActiveKey="/home"
					>
						<Nav.Item id="home" className="col-3">
							<Nav.Link><Link to="/">About SpaceX</Link></Nav.Link>
						</Nav.Item>
						<Nav.Item className="col-3">
							<Nav.Link><Link to="/history">History</Link></Nav.Link>
						</Nav.Item>
						<Nav.Item id="link-2" className="col-3">
							<Nav.Link><Link to="/vehicles">Vehicles</Link></Nav.Link>
						</Nav.Item>
						<Nav.Item id="link-3" className="col-3">
							<Nav.Link><Link  to="/launch%20sites" >Launch Sites</Link></Nav.Link>
						</Nav.Item>
					</Nav>
					<div className="container text-dark g-0">
					<Routes>
						<Route
							path="/"
							exact
							element={
								<>
										<div className="row justify-content-center g-1 mt-1">
											<div className="col-6 col-md-6 flex-fill">
													<Main
														name={data.name}
														summary={data.summary}
														website={data.links?.website}
													/>
											</div>
											<div className="col-md-6 flex-fill">
												<div className="row flex-column gy-1 gx-0">
													<Main
														name={data.ceo}
														summary="CEO"
														website={data.links?.elon_twitter}
														// img={}
													/>
													<Main
														name={data.coo}
														summary="COO"
														// website={}
														// img={}
													/>
													<Main
														name={data.cto_propulsion}
														summary="CTO of Propulsion"
														// website={}
														// img={}
													/>
												</div>
											</div>
										</div>
										<div className="row justify-content-between align-items-stretch gx-1 mt-1">
											<div className="col-md-6 flex-fill">
												<div className="row justify-content-evenly gx-1 align-items-stretch">
													<div className="col-3 flex-fill">
														<Data data={data.valuation} name="Valuation" />
													</div>
													<div className="col-3 flex-fill">
														<Data data={data.employees} name="Employees" />
													</div>
													<div className="col-3 flex-fill">
														<Data data={data.vehicles} name="Vehicles" />
													</div>
													<div className="col-3 flex-fill">
														<Data
															data={data.launch_sites}
															name="Launch sites"
														/>
													</div>
												</div>
												<div className="row justify-content-between align-items-stretch gx-1 mt-1">
													<div className="col flex-fill">
														<Data
															data={`${data.headquarters?.address} in ${data.headquarters?.city}, ${data.headquarters?.state}`}
															name="Headquarters"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-6 mt-1 mt-md-0">
												<iframe
													title="company_location"
													className="border-0 w-100 h-100 rounded"
													loading="lazy"
													allowFullScreen
													src={`https://www.google.com/maps/embed/v1/search?q=${
														data.name
													}%20${data.headquarters?.address
														.split(' ')
														.join('%20')}%20${data.headquarters?.city}%20${
														data.headquarters?.state
													}&key=AIzaSyAsEIgmVzUuBk2fB94bZe8mLl-y4slMQd0`}
												></iframe>
											</div>
										</div>
								</>
							}
						/>
					</Routes>
					<Routes>
						<Route path="/history" exact element={<History />} />
					</Routes>
					</div>
				</div>
			</section>
		</Router>
	);
}
export default App;
