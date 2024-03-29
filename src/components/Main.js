import PlaceHolderMain from "./PlaceHolderMain";

function Main({ name, summary, website, linkName, date, img, id}) {
	let display = 'd-none';
	if (name.length){
		display = '';
	}
	return (
		<>
		<PlaceHolderMain name={name} />
		<div className={`card border hadow-sm h-100 justify-content-center ${display}`} key={id}>
			<div className="row g-0 text-dark ">
				{img && (
					<div className="col col-md-4 bg-secondary border-alert border">
						<img src={img} className="img-fluid rounded-start h-100" alt="" loading="lazy"/>
					</div>
				)}
				<div className="d-flex justify-content-center flex-grow-1 flex-column col-md-8 p-3 flex-fill-md">
					<div className="d-flex justify-content-between">
						<h5 className="card-title">{name}</h5>
						<h6 className="card-subtitle text-muted">{date}</h6>
					</div>
					<p className="card-text my-0">{summary}</p>
					{website && (<a href={website} className="btn btn-primary ms-auto">
						{linkName}
					</a>)}
				</div>
			</div>
		</div>
		</>
	);
}

Main.defaultProps = {
	name: '',
	summary:
		'',
	website: false,
	linkName: false,
	date: '',
	img: false,
};

export default Main;
