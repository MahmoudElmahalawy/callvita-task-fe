const initialState = {
	tasks: [],
	task: {},
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_TASKS":
			return {
				...state,
				tasks: action.payload,
			};

		case "GET_SINGLE_TASK":
			return {
				...state,
				task: action.payload,
			};

		case "ADD_TASK":
			return {
				...state,
			};

		case "EDIT_TASK":
			return {
				...state,
				task: action.payload,
			};

		case "DELETE_TASK":
			return {
				...state,
			};

		default:
			return state;
	}
};

export default tasksReducer;
