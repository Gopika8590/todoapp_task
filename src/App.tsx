import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes> 
      
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todo" element={<TodoPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;








