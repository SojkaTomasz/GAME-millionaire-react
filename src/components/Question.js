import { useContext, useEffect, useReducer } from "react"
import { initialState, reducer } from "../Reducer/reducerState"
import ResultsUserContext from "../context/resultsUserContext"
import DifficultyContext from "../context/difficultyContext"
import axios from "axios"
import "./styles/question.css"

const URL = "https://opentdb.com/api.php?amount=50&type=multiple"

function Question() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { addPoints } = useContext(ResultsUserContext)
	const { difficulty } = useContext(DifficultyContext)

	const { allQuestions, actualQuestion, actualAnswers } = state

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await axios.get(URL)
				dispatch({ type: "allQuestions", allQuestions: data.data.results })
			} catch (ex) {
				console.log(ex)
			}
		}
		if (!allQuestions) {
			getData()
		}
	}, [allQuestions])

	useEffect(() => {
		if (allQuestions) {
			findQuestion()
		}
	}, [allQuestions, difficulty])

	const findQuestion = () => {
		const newArrowQuestions = [...allQuestions]

		const findQuestion = newArrowQuestions.find(
			item => item.difficulty === difficulty
		)
		dispatch({ type: "actualQuestion", actualQuestion: findQuestion })

		const index = []
		while (index.length < 4) {
			const number = Math.floor(Math.random() * 4)
			if (!index.includes(number)) {
				index.push(number)
			}
		}

		const answers = []
		answers.push(...findQuestion.incorrect_answers, findQuestion.correct_answer)

		const mixedAnswers = []
		for (const key in answers) {
			mixedAnswers.push(answers[index[key]])
		}

		const options = ["A", "B", "C", "D"]

		const actualAnswers = []
		for (let i = 0; i < 4; i++) {
			actualAnswers.push({
				options: options[i],
				answers: mixedAnswers[i],
			})
		}

		dispatch({ type: "actualAnswers", actualAnswers: actualAnswers })
	}

	const clickAnswersHandle = value => {
		if (value === actualQuestion.correct_answer) {
			addPoints()
			const newArrowQuestions = [...allQuestions]
			const delateQuestion = newArrowQuestions.filter(
				item => item.question !== actualQuestion.question
			)
			dispatch({ type: "allQuestions", allQuestions: delateQuestion })
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
				{actualAnswers.map(answers => (
					<button
						key={answers.answers}
						onClick={() => clickAnswersHandle(answers.answers)}
					>
						<span style={{ color: "orange" }}>{answers.options}: </span>
						<span dangerouslySetInnerHTML={{ __html: answers.answers }}></span>
					</button>
				))}
			</div>
		</div>
	)
}

export default Question
