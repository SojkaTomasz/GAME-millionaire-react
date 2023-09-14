import { useContext } from "react"
import "../styles/helpButtons.css"
import GameControlContext from "../../context/gameControlContext"

function HelpButtons() {
	const { actualAnswers, btnHelpList, handleBtnHelpList, handleActualAnswers } =
		useContext(GameControlContext)

	const handleClickBtnHelp = (id, name) => {
		const newBtnHelpList = [...btnHelpList].map(item => {
			if (item.id === id) {
				item.active = false
			}
			return item
		})
		handleBtnHelpList(newBtnHelpList)
		if (name === "fifty fifty") {
			helpFiftyFifty()
		} else if (name === "phone") {
			helpPhone()
		} else {
			helpUser()
		}
	}

	const helpFiftyFifty = () => {
		let removedCount = 0
		const nawActualAnswers = [...actualAnswers].filter(item => {
			if (removedCount < 2 && item.correctAnswer === false) {
				removedCount++
				return item.correctAnswer !== false
			}
			return item
		})
		handleActualAnswers(nawActualAnswers)
	}
	const helpPhone = () => {
		console.log("helpPhone")
	}
	const helpUser = () => {
		console.log("helpUser")
	}

	return (
		<div>
			{btnHelpList.map(item => (
				<button
					key={item.id}
					className={`help-buttons ${!item.active && "used-help-buttons"}`}
					onClick={() => handleClickBtnHelp(item.id, item.name)}
				>
					{item.text}
				</button>
			))}
		</div>
	)
}

export default HelpButtons
