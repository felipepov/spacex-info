function Main({ name, summary, website, date, img}) {
	return (
		<div className="card h-100 justify-content-center ">
			<div class="row g-0 text-dark ">
				{img && (
					<div class="col-4 bg-secondary border-alert border">
						<img src="" class="img-fluid rounded-start h-100" alt="" />
					</div>
				)}
				<div class="col col-md-8 p-3 flex-fill-md">
					<div className="d-flex justify-content-between">
						<h5 className="card-title">{name}</h5>
						<h6 class="card-subtitle text-muted">{date}</h6>
					</div>
					<p className="card-text">{summary}</p>
					<a href={website} className="btn btn-primary">
						Official Website
					</a>
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
