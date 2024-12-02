import axios from 'axios'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v2'

export const getArticles = async () => {
	const { data } = await axios('/search?query=react')
	return data
}

export const searchArticles = async (query, page) => {
	const { data } = await axios('/search', {
		params: {
			query,
			page,
			hitsPerPage: 10,
		},
	})
	return data
}
