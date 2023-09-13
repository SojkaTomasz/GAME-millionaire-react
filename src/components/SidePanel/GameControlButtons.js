import { useContext } from "react"
import GameControlContext from "../../context/gameControlContext"
import ResultsUserContext from "../../context/resultsUserContext"
import "../styles/gameControlButtons.css"

function GameControlButtons() {
	const { handleClickFinish, handleFinishGame } = useContext(GameControlContext)
	const { points } = useContext(ResultsUserContext)

	return (
		<div className='box-game-control-buttons'>
			<div class='tooltip-game-control-buttons'>
				<button
					className='game-control-buttons'
					onClick={() => window.location.reload()}
				>
					Restart
				</button>
				<span class='tooltip-text-game-control-buttons'>Start the game again!</span>
			</div>
			{points ? (
				<div class='tooltip-game-control-buttons'>
					<a
						onClick={() => {
							handleClickFinish("Congratulations, your results are below!")
							handleFinishGame()
						}}
						className='game-control-buttons'
						href='#finish-game'
					>
						Finish
					</a>
					<span class='tooltip-text-game-control-buttons'>
						Finish at this stage and get your winnings!
					</span>
				</div>
			) : null}
		</div>
	)
}

export default GameControlButtons
