import React from "react"

const ResultsUserContext = React.createContext({
	points: 0,
	addPoints: () => {},
	cash: "",
	addCash: () => {},
	safeCash: "",
	addSafeCash: () => {},
	finishGame: false,
	handleFinishGame: () => {},
})

ResultsUserContext.displayName = "ResultsUserContext"

export default ResultsUserContext
