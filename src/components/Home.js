import IndexCandles from "./candles/IndexCandles"

const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexCandles user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home