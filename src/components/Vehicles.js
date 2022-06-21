import { useState, useEffect } from 'react';
import Data from './Data';
import Main from './Main';

function Vehicles({ data, fetchData, findLinkName }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log('Vehicles page intiliazed');
		setLoaded(fetchData('ships'));
	}, []);

	return (
		<>
		{loaded &&
			(<div className="row justify-content-center g-1 mt-1">
                {data.length > 0 
				? data.map((item, index) => {
					return (
                        <>
                        <div className="col-9 p-0 flex-fill">
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
                        <div className={`col-3 flex-fill`}>
                            <div className="d-flex justify-content-between w-100 h-100 flex-fill">
                            <Data 
                                name="Launches"
                                data={item.launches ? item.launches.length : false}
                                key={`${index}.${index++}`}
                            />
                            {item.mass_kg && <Data 
                                name="Mass"
                                data={item.mass_kg}
                                key={`${index}.0${index++}`}
                            />}
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
