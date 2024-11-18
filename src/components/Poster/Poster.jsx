const Poster = ({ post }) => {
	return (
		<>
			<h2>Post #{post.id}</h2>
			<hr />
			<h4>Title: {post.title}</h4>
			<p>Body: {post.body}</p>
		</>
	)
}

export default Poster
