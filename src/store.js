// We'll dive deeper into middleware later.
// For now, it's enough to know that this loggerMiddleware prints out useful
// information about everything that happens in your store.
// Much like requests in express pass from middleware to middleware, actions in redux
// pass from middleware to middleware. The loggerMiddleware gets a chance to see
// actions before they are processed. They get in the middle, hence, middleware.
import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

// We'll soon revisit the initial state of this application.
const initialState = {
	grid: [Array(20).fill("")],
	color: "red"
};

// ACTION TYPES
/* we'll add some action types soon */
const ADDROW = "ADDROW";
const SELECTCOLOR = "SELECTCOLOR";

// ACTION CREATORS
/* we'll also add the corresponding action creators */
export const addRow = () => ({ type: ADDROW });
export const changeColor = color => ({ type: SELECTCOLOR, color: color });

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case ADDROW:
			//this does not work!
			//return { grid: grid.push(Array(20).fill("")) };
			//add new state
			const newGrid = newState.grid.concat([Array(20).fill("")]);
			newState.grid = newGrid;
			break;
		//return { ...state, grid: [...state.grid, Array(20).fill("")] };
		case SELECTCOLOR:
			//change store.color to new color
			const newColor = action.color;
			newState.color = newColor;
			break;
		default:
			return newState;
	}
	return newState;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
