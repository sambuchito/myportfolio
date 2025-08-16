import { useState, useEffect } from "react";

export default function FunFacts() {
  const [fact, setFact] = useState("");
  const [image, setImage] = useState("");

  const fetchAnimal = async () => {
    const res = await fetch("https://some-animal-api.com/random");
    const data = await res.json();
    setFact(data.fact);
    setImage(data.image);
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
