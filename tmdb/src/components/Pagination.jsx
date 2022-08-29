const Pagination = ({
	page,
	numPages,
	hasPreviousPage,
	onPreviousPage,
	hasNextPage,
	onNextPage,
}) => {
	return (
		<div className="pagination d-flex justify-content-between align-items-center mt-3">
			<div className="previous-page">
				<div
					className="btn btn-primary"
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
				>
					Previous Page
				</div>
			</div>

			<div className="current-page">
				Page {page}/{numPages}
			</div>

			<div className="next-page">
				<div
					className="btn btn-primary"
					disabled={!hasNextPage}
					onClick={onNextPage}
				>
					Next Page
				</div>
			</div>
		</div>
	);
};

export default Pagination;
