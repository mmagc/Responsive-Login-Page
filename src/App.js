import './App.css';
import logo from './img/Logo.png'; 
import googleLogo from './google-logo2.svg';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const validateForm = () => {
    const formErrors = {};
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (!username) {
      formErrors.username = "Login (Email ou Telefone) é obrigatório.";
    } else if (!/^\S+@\S+\.\S+$/.test(username) && !/^\d+$/.test(username)) {
      formErrors.username = "Por favor, insira um email ou número de telefone válido.";
    }

    if (!password) {
      formErrors.password = "Senha é obrigatória.";
    } else if (password.length < 6) {
      formErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (validateForm()) {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div className="App">
      <main className="sidebar">
        <img src={logo} alt="Company Logo" className="logo" />
        <header>
          <h1>Nice to see you again</h1>
        </header>
        <section>
          <form className="login-form" onSubmit={handleSubmit}>
            
            <label htmlFor="username">Login</label>
            <input id="username" type="text" placeholder="Email or Phone Number" aria-label="Email or Phone Number" />
            {errors.username && <span className="error">{errors.username}</span>}
            
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input id="password" type={showPassword ? "text" : "password"} placeholder="Enter password" aria-label="Password" />
              <span className="eye-icon" onClick={handleTogglePassword}>
                {showPassword ? <FaEyeSlash aria-label="Hide password" /> : <FaEye aria-label="Show password" />}
              </span>
            </div>
            {errors.password && <span className="error">{errors.password}</span>}

            <div className="toggle-container">
              <label className="toggle-label" htmlFor="rememberMe">
                <input type="checkbox" onChange={handleToggleRememberMe} checked={rememberMe} className="toggle-input" id="rememberMe" aria-label="Remember me"/>
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-text">Remember me</span>
              <a href='/Forgot Password' className="forgot-password" aria-label="Forgot password">Forgot password?</a>
            </div>

            <button type="submit" aria-label="Sign in button">Sign in</button>

            <div className="separator">
              <hr />
            </div>

            <button className='google' aria-label="Sign in with Google">
              <img src={googleLogo} alt="Google logo" className="google-logo" />
              Or sign in with Google
            </button>

            <div className="signup-link">
              <span>Don't have an account? </span>
              <a href="/signup" aria-label="Sign up now">Sign up now</a>
            </div>

          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
