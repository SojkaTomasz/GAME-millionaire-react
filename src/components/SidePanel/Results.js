import { useContext, useEffect, useState } from "react"
import PointsContext from "../../context/pointsContext"
import "../styles/results.css"

function Results() {
	const pointsContext = useContext(PointsContext)

	const [tableCash, setTableCash] = useState([
		{ number: 1, cash: "100 $", safeCash: false, active: false },
		{ number: 2, cash: "200 $ ", safeCash: false, active: false },
		{ number: 3, cash: "300 $", safeCash: false, active: false },
		{ number: 4, cash: "500 $", safeCash: false, active: false },
		{ number: 5, cash: "1 000 $", safeCash: true, active: false },
		{ number: 6, cash: "2 000 $", safeCash: false, active: false },
		{ number: 7, cash: "4 000 $", safeCash: false, active: false },
		{ number: 8, cash: "8 000 $", safeCash: false, active: false },
		{ number: 9, cash: "16 000 $", safeCash: false, active: false },
		{ number: 10, cash: "36 000 $", safeCash: true, active: false },
		{ number: 11, cash: "64 000 $", safeCash: false, active: false },
		{ number: 12, cash: "128 000 $", safeCash: false, active: false },
		{ number: 13, cash: "250 000 $", safeCash: false, active: false },
		{ number: 14, cash: "500 000 $", safeCash: false, active: false },
		{ number: 15, cash: "1 000 000 $", safeCash: true, active: false },
	])

	useEffect(() => {
		let newTableCash = [...tableCash]
		newTableCash.filter(item => {
			if (item.number === pointsContext.points) {
				item.active = true
			} else item.active = false
			return
		})
		setTableCash(newTableCash)
	}, [pointsContext.points])

	return (
		<ul className='box-results' type='number'>
			{tableCash.reverse().map(item => (
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
