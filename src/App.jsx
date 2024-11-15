// import './App.css' vanilla css

import Button from './components/Button/Button'
import Container from './components/Container/Container'
import Title from './components/Title/Title'

// import Test from './components/Test/Test'

// import Post from './components/Post'
// const posts = [
// 	{
// 		id: 1,
// 		title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
// 		body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
// 	},
// 	{
// 		id: 2,
// 		title: 'qui est esse',
// 		body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
// 	},
// 	{
// 		id: 3,
// 		title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
// 		body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
// 	},
// 	{
// 		id: 4,
// 		title: 'eum et est occaecati',
// 		body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
// 	},
// ]

function App() {
	return (
		<>
			<Container>
				<Title>qwe</Title>
			</Container>
			<Container>
				<Title>qwe</Title>
			</Container>
			<Title varian='primary'>qwe</Title>
			<Title varian='secondary'>qwe</Title>
			<Button size='lg' variant='primary'>
				click
			</Button>

			<Button type='icon' variant='primary'>
				click 2
			</Button>
			<hr />
		</>
	)
}

export default App
