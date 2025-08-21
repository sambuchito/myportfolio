import { useState, useEffect } from "react";
import "../assets/css/base.css"
import "../assets/css/funfacts.css";

export default function FunFacts() {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchFact = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"
      );
      const data = await res.json();
      // Si viene como array o objeto
      const text = Array.isArray(data) ? data[0]?.text : data?.text;
      setFact(text || "No se encontró dato 😉");
    } catch (error) {
      console.error(error);
      setFact("Error al obtener el dato");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="funfacts-container">
      <h1 className="funfacts-title">Fun Facts about Cats</h1>
      {isLoading ? (
        <p className="funfact-loading">Loading...</p>
      ) : (
        <div className="funfact-card">{fact}</div>
      )}
      <button className="funfact-button" onClick={fetchFact}>
        Another Fact
      </button>
    </div>
  );
}
