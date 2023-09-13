import { useContext, useEffect, useState } from "react"
import { firebaseConfig } from "../firebase"
import ResultsUserContext from "../context/resultsUserContext"
import axios from "axios"
import "./styles/topResults.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/top-results.json`

function TopResults() {
	const [toggleShow, setToggleShow] = useState(false)
	const { userName, date, cashWin } = useContext(ResultsUserContext)
	const [dataUsersResults, setDataUsersResults] = useState()

	useEffect(() => {
		const getDataUsersResults = async () => {
			const res = await axios.get(HTTPS_URL)
			let allDataUsersResults = []
			for (const key in res.data) {
				const cashWinNumber = res.data[key].cashWin
					.replaceAll(" ", "")
					.replaceAll("$", "")
				allDataUsersResults.push({ ...res.data[key], id: key, cashWinNumber })
			}
			allDataUsersResults.sort((a, b) => b.cashWinNumber - a.cashWinNumber)
			setDataUsersResults(allDataUsersResults)
		}
		setTimeout(() => {
			getDataUsersResults()
		}, 500)
	}, [userName, date, cashWin])

	return (
		<>
			<button
				onClick={() => setToggleShow(!toggleShow)}
				className={`btn-top-results ${toggleShow && "animation-btn-top-results"}`}
			>
				{toggleShow ? (
					<>
						<i className='fa-solid fa-arrow-up'></i> Top 10 Results
					</>
				) : (
					<>
						Top 10 Results <i className='fa-solid fa-arrow-down'></i>
					</>
				)}
			</button>
			<div className={`box-top-results ${toggleShow && "animation-box-top-results"}`}>
				{dataUsersResults && dataUsersResults.length ? (
					<table className='list-top-results'>
						<thead>
							<tr>
								<th>Ranking</th>
								<th>Name</th>
								<th>Date</th>
								<th>Cash</th>
							</tr>
						</thead>
						{dataUsersResults &&
							dataUsersResults.slice(0, 10).map((item, id) => (
								<tbody key={item.id}>
									<tr>
										<th>{id + 1}</th>
										<th>{item.userName}</th>
										<th>{item.date}</th>
										<th>{item.cashWin}</th>
									</tr>
								</tbody>
							))}
					</table>
				) : (
					<p>No results. Be the first, take up the challenge and play!</p>
				)}
			</div>
		</>
	)
}

export default TopResults
