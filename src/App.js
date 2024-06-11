import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./views/home";
import injectContext from './store/context';
import CardinfoPeople from './components/peopleinfo';
import CardinfoPlanet from './components/planetinfo';
import Cardinfovehicle from './components/vehicleinfo';



function App() {


  return (
    <BrowserRouter>
     <Routes>
       <Route path='/'  element={<Home/>}></Route>
       <Route path='/info'  element={<CardinfoPeople/>}></Route>
       <Route path='/infoplanet'  element={<CardinfoPlanet/>}></Route>
       <Route path='/infovehicle'  element={<Cardinfovehicle/>}></Route>
     </Routes>
    
    </BrowserRouter>

  );
}

export default injectContext(App);
