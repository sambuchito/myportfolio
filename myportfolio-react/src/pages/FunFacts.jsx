import { useContext, useState, useEffect } from "react";
import { SkinContext } from "../context/SkinContext";
import "../assets/css/base.css"
import "../assets/css/funfacts.css";
import SocialIcons from "../components/SocialIcons";
import horseDark from "../assets/img/horse.svg"
import horseLight from '../assets/img/horse2.svg';

export default function FunFacts() {
  const { darkMode } = useContext(SkinContext);
  const [fuctImg, setFuctImg] = useState(horseLight);
  
  useEffect(() => {
      setFuctImg(darkMode ? horseLight : horseDark);
  }, [darkMode]);

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

      setFact(factData?.fact || "Could not bring fact");
      setImage(imageData[0]?.url || "");
    } catch (error) {
      console.error(error);
      setFact("Error fetching fact or image");
      setImage("");
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
        <div className="funfact-card">{image && <img src={image} alt="random cat" className="funfacts-image" />}
        <p className="funfacts-text">{fact}</p>
        </div>
      )}
      <button className="funfact-button" onClick={fetchFactAndImg}>
        Another Fact
      </button>
    </div>
    <img 
      src={fuctImg} 
      alt="" 
      loading="lazy" 
      className="fun-back-img" 
      />

      <img 
      src={fuctImg} 
      alt="" 
      loading="lazy" 
      className="fun-back-img-2" 
      />
      <SocialIcons />
    </section>
  );
}
