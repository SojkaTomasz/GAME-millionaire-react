import { useContext } from "react"
import GameControlContext from "../context/gameControlContext"
import ResultsUserContext from "../context/resultsUserContext"
import "./styles/finishGame.css"

function FinishGame() {
	const { finishGameText, wrongAnswer } = useContext(GameControlContext)
	const { date, cashWin } = useContext(ResultsUserContext)

	return (
		<div className='box-finish-game'>
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
				<div>
					<h2>Your result</h2>
					<p>{finishGameText}</p>
					<table className='results-finish-game'>
						<tr>
							<th>Name</th>
							<th>Tomek</th>
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
		</div>
	)
}

export default FinishGame
