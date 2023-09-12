export const initialState = {
	allQuestions: null,
	actualQuestion: null,
	actualAnswers: null,
	difficulty: "easy",

	showCorrectAnswers: false,

	cash: "0 $",
	safeCash: "0 $",

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

		case "cash":
			return { ...state, cash: action.cash }
		case "safeCash":
			return { ...state, safeCash: action.safeCash }

		case "points":
			return { ...state, points: action.points }

		default:
			throw new Error(action.type)
	}
}
