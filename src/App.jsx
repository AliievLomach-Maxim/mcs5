import { useState } from 'react'
import data from '../posts.json'
import Paginator from './components/Paginator/Paginator'
import Poster from './components/Poster/Poster'

const App = () => {
	const [currentPost, setCurrentPost] = useState(1)

	const postsCount = data.length
	const post = data[currentPost - 1]

	const handleNext = () => {
		if (currentPost === postsCount) return
		setCurrentPost(currentPost + 1)
	}
	const handlePrev = () => {
		if (currentPost === 1) return
		setCurrentPost(currentPost - 1)
	}

	return (
		<>
			<Paginator
				postsCount={postsCount}
				handleNext={handleNext}
				handlePrev={handlePrev}
				currentPost={currentPost}
			/>
			<hr />
			<hr />
			<Poster post={post} />
		</>
	)
}

export default App
