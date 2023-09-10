function HelpButtons() {
	const btnHelp = [
		{ id: 1, text: "50:50", className: "btn-help", active: false },
		{
			id: 2,
			text: <i className='fa-solid fa-phone-flip'></i>,
			className: "btn-help",
			active: true,
		},
		{
			id: 3,
			text: <i className='fa-solid fa-users'></i>,
			className: "btn-help",
			active: false,
		},
	]

	return (
		<div>
			{btnHelp.map(item => (
				<button
					key={item.id}
					className={`${item.className} ${item.active && "used-help"}`}
				>
					{item.text}
				</button>
			))}
		</div>
	)
}

export default HelpButtons
