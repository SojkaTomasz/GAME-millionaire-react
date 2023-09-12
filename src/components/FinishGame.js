import "./styles/finishGame.css"

function FinishGame() {
	return (
		<div className='box-finish-game'>
			<div>
				<h2>Your result</h2>
				<table className='results-finish-game'>
					<tr>
						<th>Name</th>
						<th>Tomek</th>
					</tr>
					<tr>
						<th>Data</th>
						<th>9/11/2023</th>
					</tr>
					<tr>
						<th>Cash</th>
						<th>1 000 000 $</th>
					</tr>
				</table>
				<div class='tooltip-game-control-buttons'>
					<button onClick={() => window.location.reload()}>Restart</button>
					<span class='tooltip-text-game-control-buttons'>Start the game again!</span>
				</div>
			</div>
		</div>
	)
}

export default FinishGame
