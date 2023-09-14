import { useReducer } from "react"
import { reducer, initialState } from "../Reducer/reducerState"
import ResultsUserContext from "../context/resultsUserContext"
import GameControlContext from "../context/gameControlContext"
import SidePanel from "./SidePanel"
import Question from "./Question"
import TopResults from "./TopResults"
import HelpPhone from "./HelpButtons/HelpPhone"
import "./styles/app.css"

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<GameControlContext.Provider
			value={{
				finishGame: state.finishGame,
				finishGameText: state.finishGameText,
				wrongAnswer: state.wrongAnswer,
				clickFinish: state.clickFinish,
				difficulty: state.difficulty,
				actualAnswers: state.actualAnswers,
				btnHelpList: state.btnHelpList,
				usedHelpFiftyFifty: state.usedHelpFiftyFifty,
				usedHelpPhone: state.usedHelpPhone,
				answersHelpPhone: state.answersHelpPhone,
				handleFinishGame: () => {
					dispatch({ type: "finishGame", finishGame: true })
				},
				handleWrongAnswer: text => {
					dispatch({ type: "finishGameText", finishGameText: text })
					dispatch({ type: "date", date: new Date().toLocaleDateString() })
					dispatch({ type: "wrongAnswer", wrongAnswer: true })
				},
				handleClickFinish: text => {
					dispatch({ type: "finishGameText", finishGameText: text })
					dispatch({ type: "date", date: new Date().toLocaleDateString() })
					dispatch({ type: "clickFinish", clickFinish: true })
				},
				changeDifficulty: difficulty => {
					dispatch({ type: "difficulty", difficulty: difficulty })
				},
				handleActualAnswers: answers => {
					dispatch({ type: "actualAnswers", actualAnswers: answers })
				},
				handleBtnHelpList: list => {
					dispatch({ type: "btnHelpList", btnHelpList: list })
				},
				handleHelpFiftyFifty: boolean => {
					dispatch({ type: "usedHelpFiftyFifty", usedHelpFiftyFifty: boolean })
				},
				handleHelpPhone: (boolean, answers) => {
					dispatch({ type: "usedHelpPhone", usedHelpPhone: boolean })
					dispatch({ type: "answersHelpPhone", answersHelpPhone: answers })
				},
			}}
		>
			<ResultsUserContext.Provider
				value={{
					userName: state.userName,
					points: state.points,
					date: state.date,
					cash: state.cash,
					safeCash: state.safeCash,
					cashWin: state.cashWin,
					handleUserName: name => {
						dispatch({ type: "userName", userName: name })
					},
					addPoints: () => {
						dispatch({ type: "points", points: state.points + 1 })
					},
					addCash: cash => {
						dispatch({ type: "cash", cash: cash })
					},
					addSafeCash: cash => {
						dispatch({ type: "safeCash", safeCash: cash })
					},
					addCashWin: cash => {
						dispatch({ type: "cashWin", cashWin: cash })
					},
				}}
			>
				<div className='box-app'>
					<TopResults />
					<div className='background-question'>
						{state.usedHelpPhone && <HelpPhone />}
						<Question />
					</div>
					<SidePanel />
				</div>
			</ResultsUserContext.Provider>
		</GameControlContext.Provider>
	)
}

export default App
