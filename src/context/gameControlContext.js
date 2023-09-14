import React from "react"

const GameControlContext = React.createContext({
	finishGame: false,
	handleFinishGame: () => {},
	finishGameText: "",
	wrongAnswer: false,
	handleWrongAnswer: () => {},
	clickFinish: false,
	handleClickFinish: () => {},
	difficulty: "",
	changeDifficulty: () => {},
	actualAnswers: null,
	handleActualAnswers: () => {},
	btnHelpList: null,
	handleBtnHelpList: () => {},
	usedHelpFiftyFifty: false,
	handleHelpFiftyFifty: () => {},
	usedHelpPhone: false,
	answersHelpPhone: "",
	handleHelpPhone: () => {},
})

GameControlContext.displayName = "GameControlContext"

export default GameControlContext
