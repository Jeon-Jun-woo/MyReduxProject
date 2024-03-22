import {Fragment,useEffect} from "react";
import {fetchMainData,fetchMainVO} from "../../actions/cdlpActions";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function Home(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchMainData())
        dispatch(fetchMainVO())
    },[])
    const cdlpMainList=useSelector((state)=>state.cdlps.cdlp_main_list)
    const cdlpMainData=useSelector((state)=>state.cdlps.cdlp_main_vo)
    const htmlC=cdlpMainList.map((cdlp) =>
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <Link className="block-2-item" to={"/cdlp/detail/" + cdlp.cno}>
                <figure className="image">
                    <img src={cdlp.poster} alt="" className="img-fluid rounded-circle"/>
                </figure>
                <div className="text">
                    <span className="text-uppercase">{cdlp.pub}</span>
                    <h3 style={{fontSize: '25px'}}>{cdlp.name}</h3>
                </div>
            </Link>
            <p style={{fontSize: '20px'}} className="text-primary font-weight-bold text-right">조회수: {cdlp.hit}</p>
        </div>
    )

    return (
        <Fragment>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to={"/"}>Home</Link> <span className="mx-2 mb-0"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section block-8">
                <div className="container">
                    <div className="row justify-content-center  mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>Best</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7 mb-5">
                            <Link to={"/cdlp/detail/" + cdlpMainData.cno}><img src={cdlpMainData.poster}
                                                                               alt="Image placeholder"
                                                                               className="img-fluid rounded-circle"
                                                                               style={{"width": "500px"}}/></Link>
                        </div>
                        <div className="col-md-12 col-lg-5 text-center pl-md-5">
                            <h2><Link to={"/cdlp/detail/" + cdlpMainData.cno}>{cdlpMainData.name}</Link></h2>
                            <p className="post-meta mb-4">By <a href="#">{cdlpMainData.pub}</a> {cdlpMainData.selldate}
                            </p>
                            <p>{cdlpMainData.title}</p>
                            <p className="text-primary font-weight-bold">조회수: {cdlpMainData.hit}</p>
                            <p><Link to={"/cdlp/detail/" + cdlpMainData.cno} className="btn btn-primary btn-sm">상세
                                보기</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section site-blocks-2">
                <div className="col-md-12 site-section-heading text-center pt-4">
                    <h2>CD / LP</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {htmlC}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Home