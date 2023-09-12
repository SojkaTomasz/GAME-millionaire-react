import SidePanel from "./SidePanel"
import Question from "./Question"
import TopResults from "./TopResults"
import ResultsUserContext from "../context/resultsUserContext"
import DifficultyContext from "../context/difficultyContext"
import GameControlContext from "../context/gameControlContext"
import "./styles/app.css"
import { reducer, initialState } from "../Reducer/reducerState"
import { useReducer } from "react"

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<GameControlContext.Provider
			value={{
				finishGame: state.finishGame,
				finishGameText: state.finishGameText,
				wrongAnswer: state.wrongAnswer,
				clickFinish: state.clickFinish,
				handleFinishGame: () => {
					dispatch({ type: "finishGame", finishGame: true })
				},
				handleWrongAnswer: () => {},
				handleClickFinish: () => {},
			}}
		>
			<DifficultyContext.Provider
				value={{
					difficulty: state.difficulty,
					changeDifficulty: difficulty => {
						dispatch({ type: "difficulty", difficulty: difficulty })
					},
				}}
			>
				<ResultsUserContext.Provider
					value={{
						points: state.points,
						cash: state.cash,
						safeCash: state.safeCash,
						addPoints: () => {
							dispatch({ type: "points", points: state.points + 1 })
						},
						addCash: cash => {
							dispatch({ type: "cash", cash: cash })
						},
						addSafeCash: cash => {
							dispatch({ type: "safeCash", safeCash: cash })
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
				</ResultsUserContext.Provider>
			</DifficultyContext.Provider>
		</GameControlContext.Provider>
	)
}

export default App
