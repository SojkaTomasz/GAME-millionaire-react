import "../styles/gameControlButtons.css"

function GameControlButtons() {
	return (
		<div className='box-game-control-buttons'>
			<div class='tooltip-game-control-buttons'>
				<button>Restart</button>
				<span class='tooltip-text-game-control-buttons'>Start the game again!</span>
			</div>
			<div class='tooltip-game-control-buttons'>
				<button>Finish</button>
				<span class='tooltip-text-game-control-buttons'>Finish at this stage and get your winnings!</span>
			</div>
		</div>
	)
}

export default GameControlButtons
