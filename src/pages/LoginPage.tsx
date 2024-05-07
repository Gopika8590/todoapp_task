import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      navigate('/todo');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    
    <div className='login-container'>
      <div className='login-card'>
      <h1>Login</h1>
      <form>
        <div className='form-group'>
      <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="signup-link">
          <p>Not Registered? <a href="/signup">Sign up</a></p>
      </div>
      </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;




