import * as types from './actions.js'

const initialState = {
    title: "Hello, world! This is my default state.",
}

export const testReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
        case types.LOG_TITLE:
            return {
                title: action.payload,
            }
    }
}