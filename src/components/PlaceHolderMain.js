import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';

function PlaceHolderMain({name}) {
	let display = '';
	if (name.length){
		display = 'd-none';
	}
	return (
		<div className={`card border hadow-sm h-100 justify-content-center ${display}`}>
			<div className="row g-0 text-dark ">
				<div className="d-flex justify-content-center flex-grow-1 flex-column col-md-8 p-3 flex-fill-md">
					<div className="d-flex justify-content-between">
						<Placeholder as={Card.Title} animation="glow">
							<Placeholder xs={5} />{' '}
						</Placeholder>
					</div>
					<Placeholder as={Card.Text} animation="glow">
						<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
						<Placeholder xs={6} /> <Placeholder xs={3} />
					</Placeholder>{' '}
					<Placeholder.Button variant="primary" xs={6} />
				</div>
			</div>
		</div>
	);
}

export default PlaceHolderMain;
