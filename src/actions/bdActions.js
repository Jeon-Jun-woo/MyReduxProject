import {FETCH_BD_LIST, FETCH_BD_DETAIL} from "./types";

import axios from "axios";




export const fetchBdList=(page)=>dispatch=>{
    axios.get('http://localhost/bd/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_BD_LIST,
            payload:response.data
        }
        // reducer에게 전송
        dispatch(action)
    })
}

export const fetchBdDetail=(bno)=>dispatch=>{
    axios.get('http://localhost/bd/detail_react',{
        params:{
            bno:bno
        }
    }).then(response=>{
        const action={
            type:FETCH_BD_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}