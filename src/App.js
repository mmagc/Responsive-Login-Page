import './App.css';
import logo from './Logo.png'; 
import googleLogo from './google-logo2.svg';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Ícones de olho para a senha

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="App">
      <main className="sidebar">
      <img src={logo} alt="Company Logo" className="logo" />
        <header>
          <h1>Nice to see you again</h1>
        </header>
        <section>
          <form className="login-form">
            <label htmlFor="username">Login</label>
            <input id="username" type="text" placeholder="Email or Phone Number" required />
            
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input id="password"   type={showPassword ? "text" : "password"}   placeholder="Enter password"   required />
              <span className="eye-icon" onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="toggle-container">
              <label className="toggle-label">
                <input type="checkbox" onChange={handleToggleRememberMe} checked={rememberMe} className="toggle-input" />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-text">Remember me</span>
              <a href='/Forgot Password'  className="forgot-password">Forgot password?</a>
            </div>

            <button>Sign in</button>

            <div className="separator">
              <hr />
            </div>

            <button className='google'>
              <img src={googleLogo} alt="Google logo" className="google-logo" />
              Or sign in with Google
            </button>

            <div className="signup-link">
              <span>Don't have an account? </span>
              <a href="/signup">Sign up now</a>
            </div>

            
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
