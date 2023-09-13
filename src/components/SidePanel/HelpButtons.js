import { useContext, useEffect, useReducer } from "react"
import "../styles/helpButtons.css"
import { initialState, reducer } from "../../Reducer/reducerState"
import GameControlContext from "../../context/gameControlContext"

function HelpButtons() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { handleBtnHelpList } = useContext(GameControlContext)

	const handleClickBtnHelp = id => {
		const newBtnHelpList = [...state.btnHelpList].map(item => {
			if (item.id === id) {
				item.active = false
			}
			return item
		})
		handleBtnHelpList(newBtnHelpList)
	}

	return (
		<div>
			{state.btnHelpList.map(item => (
				<button
					key={item.id}
					className={`${item.className} ${!item.active && "used-help-buttons"}`}
					onClick={() => handleClickBtnHelp(item.id)}
				>
					{item.text}
				</button>
			))}
		</div>
	)
}

export default HelpButtons
