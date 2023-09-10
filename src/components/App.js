import SidePanel from "./SidePanel"
import Question from "./Question"
import "./styles/app.css"

function App() {
	return (
		<div className='box-app'>
			<div className='background-question'>
				<Question />
			</div>
			<SidePanel />
		</div>
	)
}

export default App
