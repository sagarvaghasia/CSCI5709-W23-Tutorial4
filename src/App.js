import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserDetail from './Components/UserDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profileListing" element={<Profile />} />
        <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
