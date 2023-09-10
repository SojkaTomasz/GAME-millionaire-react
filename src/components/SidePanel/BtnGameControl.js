import "../styles/btnGameControl.css"

function BtnGameControl() {
	return (
		<div className='box-btn'>
			<div class='tooltip'>
				<button>Restart</button>
				<span class='tooltiptext'>Start the game again!</span>
			</div>
			<div class='tooltip'>
				<button>Finish</button>
				<span class='tooltiptext'>Finish at this stage and get your winnings!</span>
			</div>
		</div>
	)
}

export default BtnGameControl
