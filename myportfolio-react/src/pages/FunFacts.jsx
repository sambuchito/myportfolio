import { useState, useEffect } from "react";
import "../assets/css/base.css"
import "../assets/css/funfacts.css";
import SocialIcons from "../components/SocialIcons";
import horseBack from '../assets/img/horse-back.svg';

export default function FunFacts() {
  const [fact, setFact] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchFactAndImg = async () => {
    try {
      setIsLoading(true);
      const factRes = await fetch("https://catfact.ninja/fact");
      const factData = await factRes.json();

      // Obtener imagen
      const imageRes = await fetch("https://api.thecatapi.com/v1/images/search");
      const imageData = await imageRes.json();

      const res = await fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"
      );
      const data = await res.json();
      // Si viene como array o objeto
      const text = Array.isArray(data) ? data[0]?.text : data?.text;
      setFact(text || factData?.fact || "No se encontró dato");
      setImage(imageData[0].url);
    } catch (error) {
      console.error(error);
      setFact("Error al obtener el dato");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFactAndImg();
  }, []);

  return (
    <section>
    
    <div className="funfacts-container">
      <h1 className="funfacts-title">Fun Facts about Cats</h1>
      {isLoading ? (
        <p className="funfact-loading">Loading...</p>
      ) : (
        <div className="funfact-card">{image && <img src={image} alt="Gato aleatorio" className="funfacts-image" />}
        <p className="funfacts-text">{fact}</p>
        </div>
      )}
      <button className="funfact-button" onClick={fetchFactAndImg}>
        Another Fact
      </button>
    </div>
    <img 
      src={horseBack} 
      alt="" 
      loading="lazy" 
      className="fun-back-img" 
      />
      <SocialIcons />
    </section>
  );
}
