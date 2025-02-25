import {Fragment,useEffect,useState,useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {boardInsert} from "../../actions/boardActions";
import axios from "axios";

function BoardInsert(){
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const dispatch=useDispatch()
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const insert=()=>{
        if(name.trim()==='')
        {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==='')
        {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==='')
        {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==='')
        {
            pwdRef.current.focus()
            return
        }
        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }
        dispatch(boardInsert(params))
    }
    //결과값 받는다
    const result=useSelector((state)=>state.boards.result)
    if(result==='yes')
    {
        window.location.href='/board/list'
    }
    else if(result==='no')
    {
        alert('게시판 추가에 실패하셨습니다')
    }
    return(
        <Fragment>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to={"/"}>Home</Link> <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">글쓰기</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <h3 className={"text-center"}>글쓰기</h3>
                <div className={"row"} style={{"width": "700px"}}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td width={"15%"} className={"text-center"}>이름</td>
                            <td width={"85%"}>
                                <input type={"text"} size={"20"} className={"input-sm"}
                                       value={name} ref={nameRef} onChange={nameChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} className={"text-center"}>제목</td>
                            <td width={"85%"}>
                                <input type={"text"} size={"50"} className={"input-sm"}
                                       value={subject} ref={subjectRef} onChange={subjectChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} className={"text-center"}>내용</td>
                            <td width={"85%"}>
                        <textarea rows={"10"} cols={"52"}
                                  value={content} ref={contentRef} onChange={contentChange}
                        ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td width={"15%"} className={"text-center"}>비밀번호</td>
                            <td width={"85%"}>
                                <input type={"password"} size={"10"} className={"input-sm"}
                                       value={pwd} ref={pwdRef} onChange={pwdChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={"2"} className={"text-center"}>
                                <button className={"btn-sm btn-success"} onClick={insert}>글쓰기</button>
                                <button className={"btn-sm btn-info"} onClick={() => nav(-1)}>취소</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
)
}

export default BoardInsert