import React from "react"

const DifficultyContext = React.createContext({
	difficulty: '',
	changeDifficulty: () => {},
})

DifficultyContext.displayName = "DifficultyContext"

export default DifficultyContext
