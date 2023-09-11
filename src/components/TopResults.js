import { useState } from "react"
import "./styles/topResults.css"

function TopResults() {
	const [toggleshow, setToggleShow] = useState(false)

	return (
		<>
			<button
				onClick={() => setToggleShow(!toggleshow)}
				className={`btn-top-results ${toggleshow && "animation-btn-top-results"}`}
			>
				{toggleshow ? (
					<>
						<i className='fa-solid fa-arrow-up'></i> Top Results
					</>
				) : (
					<>
						Top Results <i className='fa-solid fa-arrow-down'></i>
					</>
				)}
			</button>
			<div className={`box-top-results ${toggleshow && "animation-box-top-results"}`}>
				<table className='list-top-results'>
					<thead>
						<tr>
							<th>Ranking</th>
							<th>Name</th>
							<th>Date</th>
							<th>Cash</th>
						</tr>
					</thead>
					<tbody>

						<tr>
							<th>1</th>
							<th>Piotr</th>
							<th>9/11/2023</th>
							<th>1 000 000 $</th>
						</tr>
						<tr>
							<th>2</th>
							<th>Kamila</th>
							<th>9/11/2023</th>
							<th>1 000 000 $</th>
						</tr>
						<tr>
							<th>3</th>
							<th>Dawid</th>
							<th>9/11/2023</th>
							<th>500 000 $</th>
						</tr>
						<tr>
							<th>4</th>
							<th>Józef</th>
							<th>9/11/2023</th>
							<th>500 000 $</th>
						</tr>
						<tr>
							<th>5</th>
							<th>Tomek</th>
							<th>9/11/2023</th>
							<th>250 000 $</th>
						</tr>
						<tr>
							<th>6</th>
							<th>Marta</th>
							<th>9/11/2023</th>
							<th>250 000 $</th>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TopResults
