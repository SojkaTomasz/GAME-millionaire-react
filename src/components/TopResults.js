import { useEffect, useState } from "react"
import { firebaseConfig } from "../firebase"
import axios from "axios"
import "./styles/topResults.css"

const HTTPS_URL = `${firebaseConfig.databaseURL}/top-results.json`

function TopResults() {
	const [toggleShow, setToggleShow] = useState(false)
	const [dataUsersResults, setDataUsersResults] = useState()

	useEffect(() => {
		const getDataUsersResults = async () => {
			const res = await axios.get(HTTPS_URL)
			let allDataUsersResults = []
			for (const key in res.data) {
				allDataUsersResults.push({ ...res.data[key], id: key })
			}
			setDataUsersResults(allDataUsersResults)
		}
		getDataUsersResults()
	}, [])

	return (
		<>
			<button
				onClick={() => setToggleShow(!toggleShow)}
				className={`btn-top-results ${toggleShow && "animation-btn-top-results"}`}
			>
				{toggleShow ? (
					<>
						<i className='fa-solid fa-arrow-up'></i> Top Results
					</>
				) : (
					<>
						Top Results <i className='fa-solid fa-arrow-down'></i>
					</>
				)}
			</button>
			<div className={`box-top-results ${toggleShow && "animation-box-top-results"}`}>
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
						dataUsersResults.map(item => (
							<tbody>
								<tr>
									<th>1</th>
									<th>{item.userName}</th>
									<th>{item.date}</th>
									<th>{item.cashWin}</th>
								</tr>
							</tbody>
						))}
				</table>
			</div>
		</>
	)
}

export default TopResults
