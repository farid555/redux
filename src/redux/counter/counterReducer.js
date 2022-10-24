
import {INCREMENT, DECREMENT} from "./actionType.js"



const intialState = {
    value: 0
}

const counterReducer =(state= intialState, action)=>{

    switch (action.type){
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            };

            case DECREMENT:
                return {
                    ...state,
                    value: state.value - action.payload,
                };
                default:
                    return state;
    }
}

export default counterReducer;