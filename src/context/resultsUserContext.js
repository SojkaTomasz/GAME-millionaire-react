import React from "react"

const ResultsUserContext = React.createContext({
	points: 0,
	addPoints: () => {},
	cash: "",
	addCash: () => {},
	safeCash: "",
	addSafeCash: () => {},
})

ResultsUserContext.displayName = "ResultsUserContext"

export default ResultsUserContext