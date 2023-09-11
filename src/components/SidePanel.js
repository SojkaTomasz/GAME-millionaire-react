import Results from "./SidePanel/Results"
import HelpButtons from "./SidePanel/HelpButtons"
import GameControlButtons from "./SidePanel/GameControlButtons"
import "./styles/sidePanel.css"

function SidePanel() {
	return (
		<>
			<div className='box-side-panel'>
				<HelpButtons />
				<Results />
				<GameControlButtons />
			</div>
		</>
	)
}

export default SidePanel
