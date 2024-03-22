import {FETCH_MAIN_DATA,FETCH_MAIN_VO,
    FETCH_CDLP_LIST,FETCH_CDLP_DETAIL,FETCH_CDLP_FIND} from "./types";

import axios from "axios";


export const fetchMainData=()=>dispatch=>{
    axios.get('http://localhost/').then(response=>{
        const action={
            type:FETCH_MAIN_DATA,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchMainVO=()=>dispatch=>{
    axios.get('http://localhost/main').then(response=>{
        const action={
            type:FETCH_MAIN_VO,
            payload:response.data
        }
        dispatch(action)
    })
}


export const fetchCdlpList=(page)=>dispatch=>{
    axios.get('http://localhost/cdlp/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_CDLP_LIST,
            payload:response.data
        }
        // reducer에게 전송
        dispatch(action)
    })
}

// {}=>JSON
/*
    lsit.map((m)=>
       <div></div>
    )    ===>for문
 */

export const fetchCdlpFind=(page,name)=>dispatch=>{
    axios.get('http://localhost/cdlp/find_react',{
        params:{
            page:page,
            name:name
        }
    }).then(response=>{
        const action={
            type:FETCH_CDLP_FIND,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchCdlpDetail=(cno)=>dispatch=>{
    axios.get('http://localhost/cdlp/detail_react',{
        params:{
            cno:cno
        }
    }).then(response=>{
        const action={
            type:FETCH_CDLP_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}