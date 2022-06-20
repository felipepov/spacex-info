function Main({ name, summary, website, linkName, date, img, id}) {
	return (
		<div className="card h-100 justify-content-center" key={id}>
			<div className="row g-0 text-dark ">
				{img && (
					<div className="col-4 bg-secondary border-alert border">
						<img src="" className="img-fluid rounded-start h-100" alt="" />
					</div>
				)}
				<div className="d-flex flex-grow-1 flex-column col-md-8 p-3 flex-fill-md">
					<div className="d-flex justify-content-between">
						<h5 className="card-title">{name}</h5>
						<h6 className="card-subtitle text-muted">{date}</h6>
					</div>
					<p className="card-text my-0">{summary}</p>
					{linkName && website && (<a href={website} className="btn btn-primary ms-auto">
						{linkName}
					</a>)}
				</div>
			</div>
		</div>
	);
}

Main.defaultProps = {
	name: 'Title',
	summary:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui commodi corrupti velit iure atque nisi a. Eius ad enim temporibus dolorem vel? Vel, pariatur saepe magni dolorum quisquam accusantium quia!',
	website: '',
	date: '',
	img: false,
};

export default Main;
