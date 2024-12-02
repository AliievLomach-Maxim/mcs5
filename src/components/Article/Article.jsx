const Article = ({ article }) => {
	return (
		<li>
			<a href={article.url || article.story_url}>{article.title || article.story_title}</a>
		</li>
	)
}

export default Article
