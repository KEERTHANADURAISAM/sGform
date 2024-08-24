import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CreateForm from "./components/pages/CreateForm";
import Header from "./components/pages/Header";
import LandingPage from "./components/pages/LandingPage";
import FormModel from "./components/pages/FormModel";
 
function App() {
  return (
    <div className="App">
     
      <Routes>
    <Route path='/' element={<LandingPage/>}/>
   <Route path='/Createform' element={<CreateForm/>}/>
   <Route path='/formcreation' element={<FormModel/>}/>
   
     </Routes>
    
    </div>
  );
}

export default App;
