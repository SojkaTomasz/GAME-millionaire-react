import React from "react"

const GameControlContext = React.createContext({
	finishGame: false,
	handleFinishGame: () => {},
	finishGameText: "",
	wrongAnswer: false,
	handleWrongAnswer: () => {},
	clickFinish: false,
	handleClickFinish: () => {},
})

GameControlContext.displayName = "GameControlContext"

export default GameControlContext
