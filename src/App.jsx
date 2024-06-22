
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin'; // Ensure this matches the file name
import Signup from './pages/Signup'; // Ensure this matches the file name
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} /> {/* Update if file name is different */}
        <Route path='/sign-up' element={<Signup />} /> {/* Update if file name is different */}
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      
      </Routes>
    </BrowserRouter>
  );
}

