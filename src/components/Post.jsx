const Post = ({ title, body, index }) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{body}</p>
			{/* {index % 2 === 0 ? <p>OPTION</p> : <p>asd</p>} */}
			{index % 2 === 0 && <p>OPTION</p>}
		</div>
	)
}

export default Post

// const first = (second) => {
//     return second?'asd':10
//  }
