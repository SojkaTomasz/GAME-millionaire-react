import React from "react"

const ResultsUserContext = React.createContext({
	userName: "",
	handleUserName: () => {},
	points: 0,
	addPoints: () => {},
	date: "",
	cash: "",
	addCash: () => {},
	safeCash: "",
	addSafeCash: () => {},
	cashWin: "",
	addCashWin: () => {},
})

ResultsUserContext.displayName = "ResultsUserContext"

export default ResultsUserContext
