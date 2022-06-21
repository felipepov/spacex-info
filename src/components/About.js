import Main from './Main';
import Data from './Data';
import { useState, useEffect } from 'react';

function About({ data, findLinkName, fetchData }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log('Company page intiliazed');
		setLoaded(fetchData('company'));
	}, []);

	return (
		<>
			{loaded && (
				<div className="row justify-content-center g-1 mt-1">
					<div className="col-6 col-md-6 flex-fill">
						<Main
							name={data.name}
							summary={data.summary}
							website={data.links?.website}
							linkName={findLinkName(data.links, data.links?.website)}
						/>
					</div>
					<div className="col-md-6 flex-fill">
						<div className="row flex-column gy-1 gx-0">
							<Main
								name={data.ceo}
								summary="CEO"
								website={data.links?.elon_twitter}
								linkName={findLinkName(data.links, data.links?.elon_twitter)}
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
			)}
			{loaded && (
				<div className="row justify-content-between gx-1 mt-1">
					<div className="col-md-6 flex-fill">
						<div className="row justify-content-evenly gx-1 align-items-stretch ">
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
								<Data data={data.launch_sites} name="Launch sites" />
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
					<div className="col-md-6 flex-fill rounded">
						<iframe
							title="company_location"
							className="w-100 h-100 bg-light rounded"
							allowFullScreen
							src={`https://www.google.com/maps/embed/v1/search?q=${
								data.name
							}%20${data.headquarters?.address.split(' ').join('%20')}%20${
								data.headquarters?.city
							}%20${
								data.headquarters?.state
							}&key=AIzaSyAsEIgmVzUuBk2fB94bZe8mLl-y4slMQd0`}
						></iframe>
					</div>
				</div>
			)}
		</>
	);
}

About.defaultProps = {
	data: '',
};

export default About;
