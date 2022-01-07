import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Films from './Pages/Films';
import NoView from './Pages/NoView'
import Navbar from './Components/Navbar';


function App() {
  
  return (
   
   <>
   <BrowserRouter>
   <div className="startpage">
   <div className="navbarSpace">
   <Navbar />  
   </div>
   <div className="contentSpace">
     <div className="narrowItDown">
     <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="Films" element={ <Films />} />
      <Route path="*" element={ <NoView />} />
    </Routes>
     </div>
     </div>  
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
