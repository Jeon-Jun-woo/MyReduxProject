import {
    FETCH_BD_LIST,
    FETCH_BD_DETAIL
} from "../actions/types";




const bdState={
    bd_list:{},
    bd_detail:{}
}

export default function (state=bdState,action){
    switch (action.type)
    {
        case FETCH_BD_LIST:
            return{
                ...state,
                bd_list: action.payload
            }
        case FETCH_BD_DETAIL:
            return{
                ...state,
                bd_detail: action.payload
            }
        default:
            return state
    }
}