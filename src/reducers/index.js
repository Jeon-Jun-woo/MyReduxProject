import {combineReducers} from "redux";
import cdlpReducer from "./cdlpReducer";
import boardReducer from "./boardReducer";
import bookReducer from "./bookReducer";
export default combineReducers({
    cdlps:cdlpReducer,
    boards:boardReducer,
    books:bookReducer
})