import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FunFacts() {
  const [fact, setFact] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const fetchAnimal = async () => {
    try {
      const res = await fetch("https://some-animal-api.com/random");
      const data = await res.json();
      setFact(data.fact);
      setImage(data.image);
    } catch (error) {
      console.log("Error al obtener el animal:", error);
    }
  };

  useEffect(() => {
    fetchAnimal();
  }, []);

  return (
    <div className="funfacts">
      <h1>Datos Curiosos de Animales</h1>
      <img src={image} alt="animal" style={{ maxWidth: "300px" }} />
      <p>{fact}</p>
      <button onClick={fetchAnimal}>Otro animal</button>
    </div>
  );
}
