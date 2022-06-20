import { useEffect } from 'react';
import Main from './Main';

function History({ data, fetchData, findLinkName }) {
	
	useEffect(() => {
		console.log('History page intiliazed');
		fetchData('history');
	}, []);

	return (
		<>
			<div className="row flex-column justify-content-center g-1 mt-1">
				{data.length > 0 
				? data.map((item, index) => {
					return (
						<Main
							name={item.title}
							summary={item.details}
							website={item.links?.article}
							linkName={findLinkName(item.links, item.links?.article)}
							id={item.id}
							date={item.event_date_utc}
							key = {index}
							// img={}
						/>
					);
				})
			: ''}
			</div>
		</>
	);
}

export default History;
