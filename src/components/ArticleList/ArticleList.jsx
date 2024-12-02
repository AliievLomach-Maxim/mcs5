import Article from '../Article/Article'

const ArticleList = ({ hits }) => {
	return (
		<ul>
			{hits.map((el) => (
				<Article key={el.objectID} article={el} />
			))}
		</ul>
	)
}

export default ArticleList
