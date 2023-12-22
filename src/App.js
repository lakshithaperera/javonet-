import './App.css';
import CreateAccount from './pages/create-account/CreateAccount';
import ProjectName from './pages/project-name/ProjectName';
import SignIn from './pages/sign-in/SignIn';
import { Routes, Route } from 'react-router-dom';
import Summary from './pages/summary/Summary';



function App() {
  return (
    <Routes>
           <Route path="sign-in" element={<SignIn />}></Route>
           <Route path="create-account" element={<CreateAccount />}></Route>
           <Route path="project" element={<ProjectName />}></Route>
           <Route path='summary' element={<Summary />}></Route>
    </Routes>
    
   
  );
}

export default App;
