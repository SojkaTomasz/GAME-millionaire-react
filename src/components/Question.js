import { useEffect, useReducer } from "react"
import { initialState, reducer } from "../Reducer/reducerState"
import axios from "axios"
import "./styles/question.css"

const URL = "https://opentdb.com/api.php?amount=50&type=multiple"

function Question() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const { allQuestions, actualQuestion, answers, indexAnswers } = state

	useEffect(() => {
		if (!allQuestions) {
			getData()
		}
	}, [])

	const getData = async () => {
		try {
			const data = await axios.get(URL)
			dispatch({ type: "allQuestions", allQuestions: data.data.results })
		} catch (ex) {
			console.log(ex)
		}
	}

	useEffect(() => {
		if (allQuestions) {
			findQuestion()
		}
	}, [allQuestions])

	const findQuestion = () => {
		const newArrowQuestions = [...allQuestions]
		const findQuestion = newArrowQuestions.find(item => item.difficulty === "easy")
		dispatch({ type: "actualQuestion", actualQuestion: findQuestion })
		drawIndex()
		const answers = []
		answers.push(...findQuestion.incorrect_answers, findQuestion.correct_answer)
		dispatch({ type: "answers", answers: answers })
	}

	const drawIndex = () => {
		const index = []
		while (index.length < 4) {
			const number = Math.floor(Math.random() * 4)
			if (!index.includes(number)) {
				index.push(number)
			}
		}
		dispatch({ type: "indexAnswers", indexAnswers: index })
	}

	const clickAnswersHandle = value => {
		if (value === actualQuestion.correct_answer) {
			dispatch({ type: "points", points: state.points + 1 })
			const newArrowQuestions = [...allQuestions]
			const delateQuestion = newArrowQuestions.filter(
				item => item.question !== actualQuestion.question
			)
			dispatch({ type: "allQuestions", allQuestions: delateQuestion })
			findQuestion()
		} else {
			
		}
	}

	if (!actualQuestion) return null

	return (
		<div className='box-question'>
			<p
				className='question'
				dangerouslySetInnerHTML={{ __html: actualQuestion.question }}
			></p>

			<div className='box-answers'>
				<button onClick={() => clickAnswersHandle(answers[indexAnswers[0]])}>
					<span style={{ color: "orange" }}>A: </span>
					<span dangerouslySetInnerHTML={{ __html: answers[indexAnswers[0]] }}></span>
				</button>
				<button onClick={() => clickAnswersHandle(answers[indexAnswers[1]])}>
					<span style={{ color: "orange" }}>B: </span>
					<span dangerouslySetInnerHTML={{ __html: answers[indexAnswers[1]] }}></span>
				</button>
				<button onClick={() => clickAnswersHandle(answers[indexAnswers[2]])}>
					<span style={{ color: "orange" }}>C: </span>
					<span dangerouslySetInnerHTML={{ __html: answers[indexAnswers[2]] }}></span>
				</button>
				<button onClick={() => clickAnswersHandle(answers[indexAnswers[3]])}>
					<span style={{ color: "orange" }}>D: </span>
					<span dangerouslySetInnerHTML={{ __html: answers[indexAnswers[3]] }}></span>
				</button>
			</div>
		</div>
	)
}

export default Question
