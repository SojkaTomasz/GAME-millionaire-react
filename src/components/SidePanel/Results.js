import { useContext, useEffect, useReducer } from "react"
import { initialState, reducer } from "../../Reducer/reducerState"
import ResultsUserContext from "../../context/resultsUserContext"
import DifficultyContext from "../../context/difficultyContext"
import "../styles/results.css"

function Results() {
	const { points, addCash, addSafeCash } = useContext(ResultsUserContext)
	const { difficulty, changeDifficulty } = useContext(DifficultyContext)
	const [state, dispatch] = useReducer(reducer, initialState)
	const { cashList } = state

	useEffect(() => {
		const newCashList = cashList.map(item => {
			const newItem = { ...item }
			if (newItem.number === points) {
				newItem.active = true
				addCash(newItem.cash)
				if (newItem.safeCash) {
					addSafeCash(newItem.cash)
				}
				if (newItem.difficulty !== difficulty) {
					changeDifficulty(newItem.difficulty)
				}
			} else {
				newItem.active = false
			}
			return newItem
		})
		dispatch({ type: "cashList", cashList: newCashList })
	}, [points])

	return (
		<ul className='box-results' type='number'>
			{[...cashList].reverse().map(item => (
				<li
					key={item.number}
					className={`cash-results ${item.safeCash ? "safe-cash-results" : ""} ${
						item.active ? "cash-active-results" : ""
					}`}
				>
					<p>{item.number}</p>
					<p>{item.cash}</p>
				</li>
			))}
		</ul>
	)
}

export default Results
