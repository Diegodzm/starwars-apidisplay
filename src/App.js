import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./views/home";
import injectContext from './store/context';
import ClickedObj from './components/card';



function App() {


  return (
    <BrowserRouter>
     <Routes>
       <Route path='/'  element={<Home/>}></Route>
       <Route path='/info'  element={<ClickedObj/>}></Route>
     </Routes>
    
    </BrowserRouter>

  );
}

export default injectContext(App);
