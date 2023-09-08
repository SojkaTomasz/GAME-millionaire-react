import Results from "./SidePanel/Results"
import HelpButtons from "./SidePanel/HelpButtons"
import "./styles/sidePanel.css"

function SidePanel() {
	return (
		<>
			<div className='box-side-panel'>
				<HelpButtons />
				<Results />
			</div>
		</>
	)
}

export default SidePanel
