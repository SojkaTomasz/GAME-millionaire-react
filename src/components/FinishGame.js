import { useContext, useEffect, useReducer } from "react"
import GameControlContext from "../context/gameControlContext"
import ResultsUserContext from "../context/resultsUserContext"
import { initialState, reducer } from "../Reducer/reducerState"
import { firebaseConfig } from "../firebase"
import axios from "axios"
import "./styles/finishGame.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/top-results.json`

function FinishGame() {
	const { finishGameText } = useContext(GameControlContext)
	const { userName, date, cashWin, handleUserName } =
		useContext(ResultsUserContext)
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		if (userName && date && cashWin) {
			postTopResults()
		}
	}, [userName, date, cashWin])

	const postTopResults = async () => {
		try {
			await axios.post(HTTPS_URL, {
				userName,
				date,
				cashWin,
			})
		} catch (ex) {
			console.log(ex.response)
		}
	}

	return (
		<div id='finish-game' className='box-finish-game'>
			{cashWin === "0 $" ? (
				<div>
					<h2>Your result</h2>
					<p>{finishGameText} You didn't win any cash. Try again!</p>
					<div class='tooltip-game-control-buttons'>
						<button onClick={() => window.location.reload()}>Restart</button>
						<span class='tooltip-text-game-control-buttons'>Start the game again!</span>
					</div>
				</div>
			) : (
				<>
					{!userName ? (
						<div className='finish-game-get-name'>
							<h2>Great Result!</h2>
							<p>Enter your name to be included in the top results list!</p>
							<input
								type='text'
								value={state.userName}
								onChange={e => dispatch({ type: "userName", userName: e.target.value })}
								onKeyDown={e => e.key === "Enter" && handleUserName(state.userName)}
								placeholder='Name'
							/>
							<div class='tooltip-game-control-buttons'>
								<button onClick={() => handleUserName(state.userName)}>Add</button>
							</div>
							<div class='tooltip-game-control-buttons'>
								<button onClick={() => handleUserName("Anonymous")}>Add as anonymous</button>
							</div>
						</div>
					) : (
						<div>
							<h2>Your result</h2>
							<p>{finishGameText}</p>
							<table className='results-finish-game'>
								<tr>
									<th>Name</th>
									<th>{userName}</th>
								</tr>
								<tr>
									<th>Data</th>
									<th>{date}</th>
								</tr>
								<tr>
									<th>Cash</th>
									<th>{cashWin}</th>
								</tr>
							</table>
							<div class='tooltip-game-control-buttons'>
								<button onClick={() => window.location.reload()}>Restart</button>
								<span class='tooltip-text-game-control-buttons'>Start the game again!</span>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default FinishGame
