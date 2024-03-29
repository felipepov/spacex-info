import { useState, useEffect } from 'react';
import Data from './Data';
import Main from './Main';

function Vehicles({ data, fetchData, findLinkName }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log('Vehicles page intiliazed');
		setLoaded(fetchData('ships'));
		// eslint-disable-next-line
	}, [fetchData]);

	return (
		<>
		{loaded &&
			(<div className="row justify-content-center gx-1 gx-md-2 gy-1 mt-1">
                {data.length > 0 
				? data.map((item, index) => {
					return (
                        <>
                        <div className="col-12 col-md-9 flex-fill">
						<Main
							name={`${item.name}${item.legacy_id ? ' (' + item.legacy_id + ')': ''}`}
							summary={`${item.type ? item.name : ''} ${item.type ? 'is a ' + item.type + ' ship' : ''} ${item.model ? 'model' + item.model : ''} ${item.model ? 'built in ' + item.year_built : ''} ${item.home_port ? 'with its home port in ' + item.home_port : ''}. ${item.roles ? `Its roles are: ${Object.values(item.roles).join(', ')}` : ''}`}
							website={item.link}
							linkName={findLinkName(item, item.link)}
							id={item.id}
							date={`ACTIVE: ${item.active ? 'yes' : 'no'}`}
							key={index}
							img={item.image}
						/>
                        </div>
                        <div className="col col-md-3 p-md-0">
                            <div className="row g-0 justify-content-between h-100">
                            <div className="col"> <Data 
                                name="Launches"
                                data={item.launches ? item.launches.length : false}
                                key={`${index}.${index++}`}
                            /></div>
                            {item.mass_kg && <div className="col ms-1"><Data 
                                name="Mass"
                                data={item.mass_kg}
                                key={`${index}.0${index++}`}
                            /></div>}
                            </div>
                        </div>
                        </>
					);
				})
			: ''}
			</div>)
			}
		</>
	);
}

export default Vehicles;
