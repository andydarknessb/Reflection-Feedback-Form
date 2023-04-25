import { createStore } from "redux";
import { SET_FEELING  } FROM "./actions";

const initialState = {
    feeling: "",
};

function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEELING:
            return { ...state, feeling: action.payload };
            default:
                return state;
    }
}

const store = createStore(feedbackReducer);

export default store;