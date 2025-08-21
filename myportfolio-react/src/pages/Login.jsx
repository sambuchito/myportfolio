import '../assets/css/base.css';
import '../assets/css/login.css';

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "", });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/FunFacts";

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

    // Simulación de login
    setTimeout(() => {
      if (formData.email === "admin@mail.com" && formData.password === "1234") {
        alert("¡Login exitoso!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", formData.email);
        navigate(from, { replace: true });
      } else {
        setError("Usuario o contraseña incorrectos");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
  <div className="login-container">
    <div className="login-card">
      <div className="login-header">
        <h2>Iniciar Sesión</h2>
        <p>Bienvenido de nuevo</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="login-error">{error}</p>}

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
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

        {isLoading ? <p>Cargando...</p> : 
          <button type="submit" className="login-button">
            Iniciar Sesión 🚀
          </button>
        }
      </form>
    </div>
  </div>
);

}


