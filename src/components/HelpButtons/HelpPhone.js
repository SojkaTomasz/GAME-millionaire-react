import { useContext, useEffect, useState } from "react"
import GameControlContext from "../../context/gameControlContext"
import friend1 from "../../image/friend1.jpg"
import friend2 from "../../image/friend2.jpg"
import friend3 from "../../image/friend3.jpg"
import friend4 from "../../image/friend4.jpg"
import friend5 from "../../image/friend5.jpg"
import "../styles/helpPhone.css"

const listFriend = [
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
]

function HelpPhone() {
	const { answersHelpPhone } = useContext(GameControlContext)
	const [randomFriend, setRandomFriend] = useState(null)
	const [friendResponseSwitch, setFriendResponseSwitch] = useState(false)
	const [countdown, setCountdown] = useState(5)

	useEffect(() => {
		setRandomFriend(Math.floor(Math.random() * listFriend.length))
	}, [listFriend])

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown(countdown - 1)
			clearInterval(interval)
		}, 1000)
		setTimeout(() => {
			setFriendResponseSwitch(true)
		}, 5000)
	}, [countdown])

	return (
		<div id='help' className='box-help-phone'>
			<div>
				{friendResponseSwitch ? (
					<h2>Tip from friend {listFriend[randomFriend]?.name}</h2>
				) : (
					<h2>Your friend {listFriend[randomFriend]?.name} is wondering</h2>
				)}
				<img
					src={listFriend[randomFriend]?.friend}
					alt={listFriend[randomFriend]?.alt}
				/>
				{friendResponseSwitch && <p>"{answersHelpPhone}"</p>}
				{!friendResponseSwitch && <p>{countdown}</p>}
			</div>
		</div>
	)
}

export default HelpPhone
