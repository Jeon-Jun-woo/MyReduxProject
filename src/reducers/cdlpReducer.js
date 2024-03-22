import {FETCH_MAIN_DATA, FETCH_MAIN_VO,
    FETCH_CDLP_DETAIL,FETCH_CDLP_FIND,FETCH_CDLP_LIST} from "../actions/types";


const cdlpState={
    cdlp_main_list:[],
    cdlp_main_vo:{},
    cdlp_list:{},
    find_list:{},
    cdlp_detail:{}
}

export default function (state=cdlpState,action){
    switch (action.type)
    {
        case FETCH_MAIN_DATA:
            return{
                ...state,
                cdlp_main_list: action.payload
            }
        case FETCH_MAIN_VO:
            return{
                ...state,
                cdlp_main_vo: action.payload
            }
        case FETCH_CDLP_LIST:
            return{
                ...state,
                cdlp_list: action.payload
            }
        case FETCH_CDLP_FIND:
            return{
                ...state,
                find_list: action.payload
            }
        case FETCH_CDLP_DETAIL:
            return{
                ...state,
                cdlp_detail: action.payload
            }
        default:
            return state
    }
}