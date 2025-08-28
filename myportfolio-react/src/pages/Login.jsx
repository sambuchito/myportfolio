import '../assets/css/base.css';
import '../assets/css/login.css';
import '../assets/css/socials.css'

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SocialIcons from '../components/SocialIcons';
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "", });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/FunFacts";

  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const success = login(formData.email, formData.password);

    if (success) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid user or password");
    }
    setIsLoading(false);
  };

    // Simulación de login
    /* setTimeout(() => {
      if (formData.email === "admin@mail.com" && formData.password === "1234") {
        alert("Success!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", formData.email);
        navigate(from, { replace: true });
      } else {
        setError("Invalid user or password");
      }
      setIsLoading(false);
    }, 1000);
  }; */

  return (
  <div className="login-container">
    <div className="login-card">
      <div className="login-header">
        <h2>Log in</h2>
        <p>Welcome stranger</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="login-error">{error}</p>}

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            className='form-input'
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {isLoading ? <p>Loading...</p> : 
          <button type="submit" className="login-button">
            Iniciar Sesión 🚀
          </button>
        }
      </form>
      
    </div>
    <SocialIcons />
  </div>
);

}


