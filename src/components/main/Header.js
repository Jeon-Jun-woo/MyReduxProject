import {Link} from "react-router-dom";

function Header(){
    return(
        <header className="site-navbar" role="banner">
            <div className="site-navbar-top">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">

                        </div>

                        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                            <div className="site-logo">
                                <Link to={"/"} className="js-logo-clone">리덕스샵</Link>
                            </div>
                        </div>

                        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                            <div className="site-top-icons">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <nav className="site-navigation text-right text-md-center" role="navigation">
                <div className="container">
                    <ul className="site-menu js-clone-nav d-none d-md-block">
                        <li>
                            <Link to={"/"}>홈</Link>
                        </li>
                        <li className="has-children">
                            <a href="#">CD/LP</a>
                            <ul className="dropdown">
                                <li><Link to={"/cdlp/list"}>CD/LP 목록</Link></li>
                                <li><Link to={"/cdlp/find"}>CD/LP 찾기</Link></li>
                            </ul>
                        </li>
                        <li><a href="/book/list">도서</a></li>
                        <li><Link to={"/board/list"}>게시판</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header