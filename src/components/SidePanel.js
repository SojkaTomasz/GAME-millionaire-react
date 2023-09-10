import Results from "./SidePanel/Results"
import HelpButtons from "./SidePanel/HelpButtons"
import BtnGameControl from "./SidePanel/BtnGameControl"
import "./styles/sidePanel.css"

function SidePanel() {
	return (
		<>
			<div className='box-side-panel'>
				<HelpButtons />
				<Results />
				<BtnGameControl />
			</div>
		</>
	)
}

export default SidePanel
