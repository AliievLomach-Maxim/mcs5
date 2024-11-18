const Paginator = ({ handlePrev, currentPost, postsCount, handleNext }) => {
	return (
		<div style={{ display: 'flex' }}>
			<button onClick={handlePrev}>Prev</button>
			<p>
				{currentPost} / {postsCount}
			</p>
			<button onClick={handleNext}>Next</button>
		</div>
	)
}

export default Paginator
