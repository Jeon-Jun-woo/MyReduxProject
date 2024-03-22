import {Provider} from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import store from "./store/store";
import {CdlpList} from "./components/cdlp/CdlpList";
import {CdlpFind} from "./components/cdlp/CdlpFind";
import CdlpDetail from "./components/cdlp/CdlpDetail";
import {BoardList} from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import {BdList} from "./components/book/BdList";
import BdDetail from "./components/book/BdDetail";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <div className={"container"}>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/cdlp/list"} element={<CdlpList/>}/>
            <Route path={"/cdlp/find"} element={<CdlpFind/>}/>
            <Route path={"/cdlp/detail/:cno"} element={<CdlpDetail/>}/>
            <Route path={"/board/list"} element={<BoardList/>}/>
            <Route path={"/board/insert"} element={<BoardInsert/>}/>
            <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
            <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
            <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
            <Route path={"/book/list"} element={<BdList/>}/>
            <Route path={"/book/detail/:bno"} element={<BdDetail/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
