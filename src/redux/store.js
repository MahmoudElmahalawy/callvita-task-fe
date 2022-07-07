import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tasksReducer from "./reducers";

const logger = (store) => (next) => (action) => {
	const conLogStyle = "color: yellow; font-style: italic; background-color: green; padding: 2px;";

	console.group(action.type);
	console.log("%cAction:", conLogStyle, action.type);
	console.log("%cNew State:", conLogStyle, store.getState());
	console.groupEnd();

	return next(action);
};

const store = createStore(combineReducers({ data: tasksReducer }), applyMiddleware(thunk, logger));

export default store;
