import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchBdList} from "../../actions/bdActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const BdList=()=>{
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchBdList(curpage))
    }, [curpage])
    const bd_list=useSelector((state)=>state.books.bd_list.list)
    const totalpage=useSelector((state)=>state.books.bd_list.totalpage)
    const handleChange=(page)=>{
        setCurpage(page)
    }

    return (
        <Fragment>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to={"/"}>Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">상품 목록</strong></div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-9 order-2">

                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left mb-4"><h2 className="text-black h5">상품 목록</h2></div>
                                    <div className="d-flex">
                                        <div className="dropdown mr-1 ml-md-auto">
                                            <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                리스트
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                                <a className="dropdown-item" href="#">국내 도서</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                {bd_list &&
                                    bd_list.map((bd)=>

                                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                            <div className="block-4 text-center border">
                                                <figure className="block-4-image">
                                                    <Link to={"/book/detail/"+bd.bno}>
                                                        <img src={bd.poster} alt="Image placeholder" className="img-fluid"
                                                             style={{"height":"200px"}}
                                                        />
                                                    </Link>
                                                </figure>
                                                <div className="block-4-text">
                                                    <h3 className="ellipsis"><a href="shop-single.html">{bd.name}</a></h3>
                                                    <p className="mb-0">{bd.pub}</p>
                                                    <p className="text-primary font-weight-bold">조회수: {bd.hit}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-12 text-center">
                                    <div className="site-block-27">
                                        <div className={"text-center"}>
                                            <Pagination
                                                activePage={curpage}
                                                itemsCountPerPage={9}
                                                totalItemsCount={totalpage}
                                                pageRangeDisplayed={10}
                                                prevPageText={"<"}
                                                nextPageText={">"}
                                                onChange={handleChange}
                                                style={{"width": "100%"}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}