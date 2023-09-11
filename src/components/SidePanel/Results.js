import { useContext, useEffect, useState } from "react"
import ResultsUserContext from "../../context/resultsUserContext"
import DifficultyContext from "../../context/difficultyContext"
import "../styles/results.css"

function Results() {
	const { points, addCash, addSafeCash } = useContext(ResultsUserContext)
	const { difficulty, changeDifficulty } = useContext(DifficultyContext)
	const [cashList, setCashList] = useState([
		{
			number: 1,
			cash: "100 $",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 2,
			cash: "200 $ ",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 3,
			cash: "300 $",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 4,
			cash: "500 $",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 5,
			cash: "1 000 $",
			safeCash: true,
			active: false,
			difficulty: "medium",
		},
		{
			number: 6,
			cash: "2 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 7,
			cash: "4 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 8,
			cash: "8 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 9,
			cash: "16 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 10,
			cash: "36 000 $",
			safeCash: true,
			active: false,
			difficulty: "hard",
		},
		{
			number: 11,
			cash: "64 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 12,
			cash: "128 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 13,
			cash: "250 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 14,
			cash: "500 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 15,
			cash: "1 000 000 $",
			safeCash: true,
			active: false,
			difficulty: "easy",
		},
	])

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
		setCashList(newCashList)
	}, [points])

	return (
		<ul className='box-results' type='number'>
			{cashList.reverse().map(item => (
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
