export const initialState = {
	allQuestions: null,
	actualQuestion: null,
	actualAnswers: null,
	difficulty: "easy",

	showCorrectAnswers: false,

	finishGame: false,
	finishGameText: "",
	wrongAnswer: false,
	clickFinish: false,
	
	date: '',
	cash: "0 $",
	safeCash: "0 $",
	cashWin: "0 $",

	points: 0,
}

export const reducer = (state, action) => {
	switch (action.type) {
		case "allQuestions":
			return { ...state, allQuestions: action.allQuestions }
		case "actualQuestion":
			return { ...state, actualQuestion: action.actualQuestion }
		case "actualAnswers":
			return { ...state, actualAnswers: action.actualAnswers }
		case "difficulty":
			return { ...state, difficulty: action.difficulty }

		case "showCorrectAnswers":
			return { ...state, showCorrectAnswers: action.showCorrectAnswers }

		case "finishGame":
			return { ...state, finishGame: action.finishGame }
		case "finishGameText":
			return { ...state, finishGameText: action.finishGameText }
		case "wrongAnswer":
			return { ...state, wrongAnswer: action.wrongAnswer }
		case "clickFinish":
			return { ...state, clickFinish: action.clickFinish }

		case "date":
			return { ...state, date: action.date }
		case "cash":
			return { ...state, cash: action.cash }
		case "safeCash":
			return { ...state, safeCash: action.safeCash }
		case "cashWin":
			return { ...state, cashWin: action.cashWin }

		case "points":
			return { ...state, points: action.points }

		default:
			throw new Error(action.type)
	}
}
