import { useContext, useEffect, useReducer } from "react"
import FinishGame from "./FinishGame"
import { initialState, reducer } from "../Reducer/reducerState"
import ResultsUserContext from "../context/resultsUserContext"
import DifficultyContext from "../context/difficultyContext"
import axios from "axios"
import "./styles/question.css"

const URL = "https://opentdb.com/api.php?amount=50&type=multiple"

function Question() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { addPoints, finishGame, handleFinishGame } =
		useContext(ResultsUserContext)
	const { difficulty } = useContext(DifficultyContext)

	const { allQuestions, actualQuestion, actualAnswers, showCorrectAnswers } =
		state

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

		const answers = [...findQuestion.incorrect_answers, findQuestion.correct_answer]
		const correctAnswer = [false, false, false, true]
		const options = ["A", "B", "C", "D"]

		const answerAndCorrect = answers.map((answer, index) => ({
			answers: answer,
			correctAnswer: correctAnswer[index],
		}))

		const actualAnswers = []
		for (const key in answerAndCorrect) {
			actualAnswers.push({
				options: options[key],
				answer: answers[index[key]],
				correctAnswer: correctAnswer[index[key]],
			})
		}

		dispatch({ type: "showCorrectAnswers", showCorrectAnswers: false })
		dispatch({ type: "actualAnswers", actualAnswers: actualAnswers })
	}

	const clickAnswersHandle = value => {
		dispatch({ type: "showCorrectAnswers", showCorrectAnswers: true })
		setTimeout(() => {
			if (value === actualQuestion.correct_answer) {
				addPoints()
				const newArrowQuestions = [...allQuestions]
				const delateQuestion = newArrowQuestions.filter(
					item => item.question !== actualQuestion.question
				)
				dispatch({ type: "allQuestions", allQuestions: delateQuestion })
			} else {
				handleFinishGame()
			}
		}, 1000)
	}

	if (!actualQuestion) return null

	return (
		<>
			{finishGame ? (
				<FinishGame />
			) : (
				<div className='box-question'>
					<p
						className='question'
						dangerouslySetInnerHTML={{ __html: actualQuestion.question }}
					></p>
					<div className='box-answers'>
						{actualAnswers.map(answer => (
							<button
								className={
									showCorrectAnswers
										? answer.correctAnswer
											? "correct-answers"
											: "incorrect-answers"
										: ""
								}
								key={answer.answer}
								onClick={() => clickAnswersHandle(answer.answer)}
							>
								<span style={{ color: "orange" }}>{answer.options}: </span>
								<span dangerouslySetInnerHTML={{ __html: answer.answer }}></span>
							</button>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Question
