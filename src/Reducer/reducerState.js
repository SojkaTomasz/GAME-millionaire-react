export const initialState = {
	allQuestions: null,
	actualQuestion: null,
	answers: null,
	indexAnswers: null,
	difficulty: "easy",

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
		case "answers":
			return { ...state, answers: action.answers }
		case "indexAnswers":
			return { ...state, indexAnswers: action.indexAnswers }
		case "difficulty":
			return { ...state, difficulty: action.difficulty }

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
