import SidePanel from "./SidePanel"
import Question from "./Question"
import TopResults from "./TopResults"
import "./styles/app.css"

function App() {
	return (
		<div className='box-app'>
			<TopResults/>
			<div className='background-question'>
				<Question />
			</div>
			<SidePanel />
		</div>
	)
}

export default App
