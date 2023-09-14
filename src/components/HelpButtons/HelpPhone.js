import { useContext, useEffect, useState } from "react"
import GameControlContext from "../../context/gameControlContext"
import friend1 from "../image/friend1.jpg"
import friend2 from "../image/friend2.jpg"
import friend3 from "../image/friend3.jpg"
import friend4 from "../image/friend4.jpg"
import friend5 from "../image/friend5.jpg"
import "../styles/helpPhone.css"

function HelpPhone() {
	const { answersHelpPhone } = useContext(GameControlContext)
	const [listFriend, setListFriend] = useState([
		{
			friend: friend1,
			name: "Oliver",
			alt: "A photo of a friend named Oliver",
		},
		{
			friend: friend2,
			name: "Emma",
			alt: "A photo of a friend named Emma",
		},
		{
			friend: friend3,
			name: "Sophia",
			alt: "A photo of a friend named Sophia",
		},
		{
			friend: friend4,
			name: "William",
			alt: "A photo of a friend named William",
		},
		{
			friend: friend5,
			name: "Charlotte",
			alt: "A photo of a friend named Charlotte",
		},
	])
	const [drawFriend, setDrawFriend] = useState(null)
	const [toggle, setToggle] = useState(false)
	const [number, setNumber] = useState(5)

	useEffect(() => {
		setDrawFriend(Math.floor(Math.random() * listFriend.length))
	}, [listFriend])

	useEffect(() => {
		const interval = setInterval(() => {
			setNumber(number - 1)
			clearInterval(interval)
		}, 1000)
		setTimeout(() => {
			setToggle(true)
		}, 5000)
	}, [number])

	return (
		<div id='help' className='box-help-phone'>
			<div>
				{toggle ? (
					<h2>Tip from friend {listFriend[drawFriend]?.name}</h2>
				) : (
					<h2>Your friend {listFriend[drawFriend]?.name} is wondering</h2>
				)}
				<img src={listFriend[drawFriend]?.friend} alt={listFriend[drawFriend]?.alt} />
				{toggle && <p>"{answersHelpPhone}"</p>}
				{!toggle && <p>{number}</p>}
			</div>
		</div>
	)
}

export default HelpPhone
