import '../styles/helpButtons.css'

function HelpButtons() {
	const btnHelp = [
		{ id: 1, text: "50:50", className: "help-buttons", active: false },
		{
			id: 2,
			text: <i className='fa-solid fa-phone-flip'></i>,
			className: "help-buttons",
			active: true,
		},
		{
			id: 3,
			text: <i className='fa-solid fa-users'></i>,
			className: "help-buttons",
			active: false,
		},
	]

	return (
		<div>
			{btnHelp.map(item => (
				<button
					key={item.id}
					className={`${item.className} ${item.active && "used-help-buttons"}`}
				>
					{item.text}
				</button>
			))}
		</div>
	)
}

export default HelpButtons
