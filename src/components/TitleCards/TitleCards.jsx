import "./TitleCards.css";
// import cards_data from '../../assets/cards/Cards_data'
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGVhNDc3MmVhM2VmNjFlNDgzYThhMDViYmQ3MGRkZCIsIm5iZiI6MTcyNTg2NTU4OC42NTM4OTcsInN1YiI6IjY2ZGU3OWEwYTU1NjU2OGRlZDNhZDdkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FL7ViAML5oxTO9EBJwoTpnrTSpD2kc1v3Bm1u6RgFxA",
    },
  };

  const handleWheel = (event) => {
    event.preventDefaultY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results)) //)
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Now Playing"}</h2>
      <div
        className="card-list"
        ref={cardsRef}
      >
        {apiData.map((card, index) => {
          return (
            <Link
              to={`/player/${card.id}`}
              className="card"
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
