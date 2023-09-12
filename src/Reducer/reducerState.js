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

	userName: "",
	points: 0,
	date: "",
	cash: "0 $",
	safeCash: "0 $",
	cashWin: "0 $",

	cashList: [
		{
			number: 1,
			cash: "100 $",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 2,
			cash: "200 $ ",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 3,
			cash: "300 $",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 4,
			cash: "500 $",
			safeCash: false,
			active: false,
			difficulty: "easy",
		},
		{
			number: 5,
			cash: "1 000 $",
			safeCash: true,
			active: false,
			difficulty: "medium",
		},
		{
			number: 6,
			cash: "2 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 7,
			cash: "4 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 8,
			cash: "8 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 9,
			cash: "16 000 $",
			safeCash: false,
			active: false,
			difficulty: "medium",
		},
		{
			number: 10,
			cash: "36 000 $",
			safeCash: true,
			active: false,
			difficulty: "hard",
		},
		{
			number: 11,
			cash: "64 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 12,
			cash: "128 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 13,
			cash: "250 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 14,
			cash: "500 000 $",
			safeCash: false,
			active: false,
			difficulty: "hard",
		},
		{
			number: 15,
			cash: "1 000 000 $",
			safeCash: true,
			active: false,
			difficulty: "easy",
		},
	],
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

		case "userName":
			return { ...state, userName: action.userName }
		case "points":
			return { ...state, points: action.points }
		case "date":
			return { ...state, date: action.date }
		case "cash":
			return { ...state, cash: action.cash }
		case "safeCash":
			return { ...state, safeCash: action.safeCash }
		case "cashWin":
			return { ...state, cashWin: action.cashWin }

		case "cashList":
			return { ...state, cashList: action.cashList }

		default:
			throw new Error(action.type)
	}
}
