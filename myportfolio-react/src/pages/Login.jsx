import '../assets/css/base.css';
import '../assets/css/login.css';


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/funfacts");
    } else {
      setError("Invalid credentials. Try again.");
    }
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

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <button type="submit" className="login-button">
            Iniciar Sesión 🚀
          </button>
        )}
      </form>
    </div>
  </div>
);

}


