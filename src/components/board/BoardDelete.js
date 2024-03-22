import {useState, useRef, useEffect, Fragment} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardDelete} from "../../actions/boardActions";

function BoardDelete(){
    const {no}=useParams()
    const [pwd,setPwd]=useState('')
    const nav=useNavigate()
    const pwdRef=useRef(null)
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(boardDelete(no,pwd))
    }, [pwd]); //비밀번호가 변경되면 delet호출
    const result=useSelector((state)=>state.boards.result)
    //결과값 갖고들어와서

    const boarddel=()=>{

        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }
        setPwd(pwd)
        if(result==="yes" && result!=="")
        {
            window.location.href="/board/list"
        }
        else if(result==="no")
        {
            alert("비밀번호가 틀립니다")
            pwdRef.current.value=''
            pwdRef.current.focus()
        }
    }



    return(
        <Fragment>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to={"/"}>Home</Link> <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">게시글 삭제</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className={"row row1"}>
                    <table className={"table"}>
                        <tbody>
                        <tr className={"text-center"}>
                            <td>
                                비밀번호: <input type={"password"} className={"input-sm"}
                                             ref={pwdRef} value={pwd}
                                             onChange={(e) => setPwd(e.target.value)}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td className={"text-center"}>
                                <input type={"button"} value={"삭제"}
                                       className={"btn btn-xs btn-primary"} onClick={boarddel}/>
                                &nbsp;
                                <button className={"btn btn-xs btn-primary"}
                                        onClick={() => nav(-1)}
                                >취소
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
)
}

export default BoardDelete