import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import OTPlogin from './Components/OTP/OTPlogin';
import EnterOTP from './Components/EnterOTP/EnterOTP';
import { UserContext } from './Constants/Context';
import { useState } from 'react';
import Sell from './pages/Sell';
import Postdetails from './pages/Postdetails';


function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/userlogin' element={<Loginpage />} />
            <Route exact path='/usersignup' element={<Signuppage />} />
            <Route exact path='/OTPlogin' element={<OTPlogin />} />
            <Route exact path='/OTP' element={<EnterOTP />} />
            <Route exact path='/sell' element={<Sell/>} />
            <Route exact path='/details' element={<Postdetails/>} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
