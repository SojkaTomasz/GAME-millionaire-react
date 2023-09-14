import { useContext, useEffect, useReducer } from "react"
import FinishGame from "./FinishGame"
import { initialState, reducer } from "../Reducer/reducerState"
import ResultsUserContext from "../context/resultsUserContext"
import GameControlContext from "../context/gameControlContext"
import axios from "axios"
import "./styles/question.css"

const URL = "https://opentdb.com/api.php?amount=50&type=multiple"

function Question() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { addPoints, points, addCashWin, safeCash } =
		useContext(ResultsUserContext)
	const {
		finishGame,
		handleFinishGame,
		handleWrongAnswer,
		difficulty,
		actualAnswers,
		handleActualAnswers,
		handleHelpPhone,
		usedHelpPhone,
	} = useContext(GameControlContext)

	const { allQuestions, actualQuestion, showCorrectAnswers, cashList } = state

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
		handleActualAnswers(actualAnswers)
	}

	const clickAnswersHandle = value => {
		dispatch({ type: "showCorrectAnswers", showCorrectAnswers: true })
		if (usedHelpPhone) {
			handleHelpPhone(false, "")
		}
		setTimeout(() => {
			if (value === actualQuestion.correct_answer) {
				addPoints()
				if (cashList.length !== points) {
					const newArrowQuestions = [...allQuestions]
					const delateQuestion = newArrowQuestions.filter(
						item => item.question !== actualQuestion.question
					)
					dispatch({ type: "allQuestions", allQuestions: delateQuestion })
				}
			} else {
				handleFinishGame()
				handleWrongAnswer("Unfortunately, your answer was incorrect!")
				addCashWin(safeCash)
			}
		}, 1000)
	}

	if (!actualQuestion) return null

	return (
		<>
			{finishGame ? (
				<FinishGame />
			) : (
				<div id='help' className='box-question'>
					<p
						className='question'
						dangerouslySetInnerHTML={{ __html: actualQuestion.question }}
					></p>
					<div className='box-answers'>
						{actualAnswers.map(answer => (
							<button
								className={
									!showCorrectAnswers
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
