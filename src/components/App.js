import SidePanel from "./SidePanel"
import Question from "./Question"
import TopResults from "./TopResults"
import PointsContext from "../context/pointsContext"
import "./styles/app.css"
import { reducer, initialState } from "../Reducer/reducerState"
import { useReducer } from "react"

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<PointsContext.Provider
			value={{
				points: state.points,
				addPoints: () => {
					dispatch({ type: "points", points: state.points + 1 })
				},
			}}
		>
			<div className='box-app'>
				<TopResults />
				<div className='background-question'>
					<Question />
				</div>
				<SidePanel />
			</div>
		</PointsContext.Provider>
	)
}

export default App
