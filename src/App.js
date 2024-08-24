import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CreateForm from "./components/pages/CreateForm";
import Header from "./components/pages/Header";
import LandingPage from "./components/pages/LandingPage";

 
function App() {
  return (
    <div className="App">
     
      <Routes>
    <Route path='/' element={<LandingPage/>}/>
   <Route path='/Createform' element={<CreateForm/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
