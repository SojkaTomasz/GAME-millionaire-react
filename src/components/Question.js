import "./styles/question.css"

function Question() {
	return (
		<div className='box-question'>
			<p className='question style-question'>
				Which of the following characters from the game &quot;Overwatch&quot; was
				revealed to be homosexual in December of 2016?
			</p>
			<div className='box-answers'>
				<button className='answers style-question'>
					<span>A: </span>Tracer
				</button>
				<button className='answers style-question'>
					<span>B: </span>Widowmaker
				</button>
				<button className='answers style-question'>
					<span>C: </span>Sombra
				</button>
				<button className='answers style-question'>
					<span className=''>D: </span>Symmetra
				</button>
			</div>
		</div>
	)
}

export default Question
