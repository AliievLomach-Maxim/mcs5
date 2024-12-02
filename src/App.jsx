import { useEffect, useState } from 'react'
import { searchArticles } from './api/articles'
import ArticleList from './components/ArticleList/ArticleList'
import SearchForm from './components/SearchForm/SearchForm'

const App = () => {
	const [hits, setHits] = useState([])
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(0)
	const [totalResults, setTotalResults] = useState(0)

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	// useEffect(() => {
	// 	const getSome = async () => {
	// 		const data = await getArticles('asd')
	// 		setHits(data.hits)
	// 	}

	// 	getSome()
	// }, [])

	const search = async (query) => {
		setQuery(query)
		setPage(0)
		setHits([])
	}

	const getNextPage = async () => {
		setPage(page + 1)
	}

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				setIsLoading(true)
				setError(false)
				const res = await searchArticles(query, page)
				if (page === 0) {
					setHits(res.hits)
					setTotalResults(res.nbHits)
				} else {
					// setHits([...hits, ...res.hits])
					setHits((prevHist) => [...prevHist, ...res.hits])
				}
			} catch (error) {
				console.error(error)
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		if (query) fetchArticles()
	}, [page, query])

	return (
		<>
			<SearchForm search={search} />
			<br />
			{hits.length > 0 ? (
				<ArticleList hits={hits} />
			) : (
				!isLoading && query && !error && <p>No results..</p>
			)}
			{isLoading && (
				<>
					<h1>Loading...</h1>
					<br />
				</>
			)}
			{error && <h1>Oops...some error. pls reload</h1>}

			{hits.length > 0 && hits.length < totalResults && (
				<button onClick={getNextPage}>Load more...</button>
			)}
		</>
	)
}

export default App

// 2. push to cur arr
// 4. set page to 1
// 5. max length
// 1. loading
// 3. error
