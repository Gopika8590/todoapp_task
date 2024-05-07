import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !username || !password) {
      alert('Please fill in all fields');
      return;
    
    }
  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/');
  };

  return (
    <div className='signup-container'>
      <div className='signup-card'>
      <h1>Signup</h1>
      <form>
        <div className='form-group'>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <div className="login-link">
          <p>Already Registered? <a href="/">Login</a></p>
      </div>
      </div>
      </form>
      </div>
    </div>
  );
};

export default SignupPage;





{/*import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    // Redirect to login page on successful signup
    navigate('/');
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <div className="register-link">
      <a href="/login">Login</a>
      </div>
    </div>
    
  );
};

export default SignupPage;*/}
