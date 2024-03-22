import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchBdDetail} from "../../actions/bdActions";
import {useNavigate,useParams} from "react-router-dom";

function BdDetail(){
    const {bno}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchBdDetail(bno))
    }, []);
    const bdDetail=useSelector((state)=>state.books.bd_detail)
    return(
        <Fragment>
            <div className={"bg-light py-3"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-12 mb-0"}><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className={"text-black"}>Tank Top T-Shirt</strong></div>
                    </div>
                </div>
            </div>

            <div className={"site-section"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <img src={bdDetail.poster} alt="Image" className={"img-fluid"}/>
                        </div>
                        <div className={"col-md-6"}>
                            <h2 className={"text-black"}>{bdDetail.title}</h2>
                            <br></br>
                            <br></br>
                            <p>이름: {bdDetail.name}</p>
                            <p>출판사: {bdDetail.pub}</p>
                            <p className={"mb-4"}>발매날짜: {bdDetail.selldate}</p>
                            <p><strong className={"text-primary h4"}>{bdDetail.price} 원</strong></p>
                            <div className={"mb-1 d-flex"}>
                                <h2 className={"text-black"}></h2>
                            </div>
                            <button className={"btn btn-sm btn-primary"}
                                    onClick={() => nav(-1)}
                            >목록
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section block-3 site-blocks-2 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>조회수: {bdDetail.hit}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nonloop-block-3 owl-carousel">
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid"/>
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Tank Top</a></h3>
                                            <p className="mb-0">Finding perfect t-shirt</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid"/>
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Corater</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid"/>
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Polo Shirt</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid"/>
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">T-Shirt Mockup</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="block-4 text-center">
                                        <figure className="block-4-image">
                                            <img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid"/>
                                        </figure>
                                        <div className="block-4-text p-4">
                                            <h3><a href="#">Corater</a></h3>
                                            <p className="mb-0">Finding perfect products</p>
                                            <p className="text-primary font-weight-bold">$50</p>
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
export default BdDetail