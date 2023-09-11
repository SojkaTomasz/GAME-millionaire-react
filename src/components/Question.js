import "./styles/question.css"

function Question() {
	return (
		<div className='box-question'>
			<p className='question'>
				Which of the following characters from the game &quot;Overwatch&quot; was
				revealed to be homosexual in December of 2016?
			</p>
			<div className='box-answers'>
				<button>
					<span style={{ color: "orange" }}>A: </span>Tracer Lorem ipsum dolor sit.
				</button>
				<button>
					<span style={{ color: "orange" }}>B: </span>Widowmaker
				</button>
				<button>
					<span style={{ color: "orange" }}>C: </span>Sombra
				</button>
				<button>
					<span style={{ color: "orange" }}>D: </span>Symmetra
				</button>
			</div>
		</div>
	)
}

export default Question
