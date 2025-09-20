import { useEffect, useState } from "react";
import "../App.css";

export default function LabelCard() {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch("/Labelpark/Label.json") 
      .then((response) => response.json())
      .then((data) => setLabels(data));
  }, []);

  return (
    <div className="movies-grid">
      {labels.map((label) => (
        <div className="movie-card" key={label.id}>
          <img src={`/Labelpark/images/${label.image}`} alt={label.title} />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{label.title}</h3>
            <p className="label-card-description">{label.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
