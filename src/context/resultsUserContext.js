import React from "react"

const ResultsUserContext = React.createContext({
	points: 0,
	addPoints: () => {},
	date: "",
	cash: "",
	addCash: () => {},
	safeCash: "",
	addSafeCash: () => {},
	cashWin: "",
})

ResultsUserContext.displayName = "ResultsUserContext"

export default ResultsUserContext
