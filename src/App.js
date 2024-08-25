import logo from './logo.svg';
import {Route, Router, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Offers from './Pages/Offers';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  return (
      
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/offers' element={<Offers/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      </Routes>
    </Router>
      
    
  );
} 

export default App;
