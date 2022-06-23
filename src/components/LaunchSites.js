import { useState, useEffect } from 'react';
import Data from './Data';
import Main from './Main';

function LaunchSites({ data, fetchData, findLinkName }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log('Launch sites page intiliazed');
		setLoaded(fetchData('launchpads'));
	}, [fetchData]);

	return (
		<>
			{loaded && (
				<>
					{data.length > 0
						? data.map((item, index) => {
								return (
									<>
										<div className="row justify-content-center g-1 mt-1">
											<Main
												name={`${item.name}${
													item.full_name ? ' (' + item.full_name + ')' : ''
												}`}
												summary={item.details}
												img={item.images?.large[0]}
												date={`Status: ${item.status}`}
												id={item.id}
												key={index}
											/>
										</div>
										<div className="row justify-content-between gx-1 mt-1">
											<div className="col-md-6 flex-fill rounded">
												<div className="row justify-content-evenly gx-1 align-items-stretch ">
													<div className="col-4 flex-fill">
														<Data data={item.launches.length} name="Launches" />
													</div>
													<div className="col-4 flex-fill">
														<Data
															data={item.launch_attempts}
															name="Launch attempts"
														/>
													</div>
													<div className="col-4 flex-fill">
														<Data
															data={item.launch_successes}
															name="Launch successes"
														/>
													</div>
												</div>
											</div>
										</div>
                                        <div className="row justify-content-between align-items-stretch gx-1 mt-1">
												<div className="col-6 flex-fill">
													<Data
														data={`${item.locality}, ${item.region}`}
														name="Site"
													/>
												</div>
                                                <div className="col-md-6 flex-fill rounded mt-1 mt-md-0">
											<iframe
												title={item.name}
												className="w-100 h-100 bg-light rounded"
												allowFullScreen
												src={`https://maps.google.com/maps/embed/v1/search?q=${item.latitude},${item.longitude}&key=AIzaSyAsEIgmVzUuBk2fB94bZe8mLl-y4slMQd0`}
											></iframe>
										</div>
											</div>

									</>
								);
						  })
						: ''}
				</>
			)}
		</>
	);
}

export default LaunchSites;
