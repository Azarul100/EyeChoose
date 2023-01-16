import './App.css';
import Home from "./pages/homePage/home";
import Selection from "./pages/selectionPage/selection";
import HowTo from './pages/HowToPage/howto';
import Decide from './pages/decisionPage/decide';
import PageNotFound from './pages/PageNotFound/pagenotfound';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/selection" element={ <Selection/> } />
      <Route path="/rules" element={ <HowTo/> } />
      <Route path="/decide" element={ <Decide/> } />
      <Route path ="*" element = {<PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
