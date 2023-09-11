import React from "react"

const PointsContext = React.createContext({
	points: 0,
	addPoints: () => {},
})

PointsContext.displayName = "PointsContext"

export default PointsContext
