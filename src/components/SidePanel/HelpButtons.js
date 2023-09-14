import { useContext } from "react"
import "../styles/helpButtons.css"

import GameControlContext from "../../context/gameControlContext"

function HelpButtons() {
	const {
		actualAnswers,
		btnHelpList,
		finishGame,
		handleBtnHelpList,
		handleHelpFiftyFifty,
		handleActualAnswers,
		usedHelpFiftyFifty,
		handleHelpPhone,
	} = useContext(GameControlContext)

	const handleClickBtnHelp = (id, name) => {
		const newBtnHelpList = [...btnHelpList].map(item => {
			if (item.id === id) {
				item.active = false
			}
			return item
		})
		handleBtnHelpList(newBtnHelpList)
		if (name === "fifty fifty") {
			handleHelpFiftyFifty(true)
			helpFiftyFifty()
		} else if (name === "phone") {
			helpPhone()
		} else {
			helpUser()
		}
	}

	const helpFiftyFifty = () => {
		let removedCount = 0
		const nawActualAnswers = [...actualAnswers].filter(answer => {
			if (removedCount < 2 && answer.correctAnswer === false) {
				removedCount++
				return answer.correctAnswer !== false
			}
			return answer
		})
		handleActualAnswers(nawActualAnswers)
	}
	const helpPhone = () => {
		const percentEffective = Math.floor(Math.random() * actualAnswers.length)
		if (percentEffective < actualAnswers.length - 1) {
			const answerHelpPhone = [...actualAnswers].filter(
				answer => answer.correctAnswer === true
			)
			handleHelpPhone(true, answerHelpPhone[answerHelpPhone.length - 1].options)
		} else {
			const answerHelpPhone = [...actualAnswers].filter(
				answer => answer.correctAnswer !== true
			)
			let percentEffective = Math.floor(Math.random() * answerHelpPhone.length)
			if (usedHelpFiftyFifty) {
				percentEffective = 0
			}
			handleHelpPhone(true, answerHelpPhone[percentEffective].options)
		}
	}
	const helpUser = () => {
		console.log("helpUser")
	}

	if (!actualAnswers || finishGame) return null

	return (
		<div className="box-help-buttons">
			{btnHelpList.map(item => (
				<a
					key={item.id}
					className={`help-buttons ${!item.active && "used-help-buttons"}`}
					onClick={() => handleClickBtnHelp(item.id, item.name)}
					href='#help'
				>
					{item.text}
				</a>
			))}
		</div>
	)
}

export default HelpButtons
