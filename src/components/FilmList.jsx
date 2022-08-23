import React from "react";
import { useState } from "react";
import FilmAdder from "./FilmAdder";
import FilmCard from "./FilmCard";

export default function FilmList() {
  const filmList = [
    {
      name: "Mass",
      year: "2021",
      description:
        "Aftermath of a violent tragedy that affects the lives of two couples in different ways.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMzk5ZWU1ZTktZjMxZi00YjFmLTk4NGUtZjU1NmFiNWI4YThjXkEyXkFqcGdeQXVyMTg1MDc3NjY@._V1_.jpg",
      watched: false,
    },
    {
      name: "Flee",
      year: "2021",
      description:
        "FLEE tells the extraordinary true story of a man, Amin, on the verge of marriage which compels him to reveal his hidden past for the first time.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTBmYzU0NWQtMmE3NC00MTEyLWJlMDktOGIzYTlmZjJlNDZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      watched: false,
    },
    {
      name: "Maixabel",
      year: "2021",
      description:
        "11 years after her husband was killed by the Basque group ETA, Maixabel Lasa agrees to a request to meet one of the assassins who is in prison, in an attempt to find some kind of restorative justice.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOTVkMzBmMjEtM2M5MC00NTZhLTllY2ItOTBhMjU1MDZhZjUzXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_FMjpg_UX1000_.jpg",
      watched: false,
    },
  ];

  const [films, setFilms] = useState(filmList);

  const updateWatched = (filmToUpdate) => {
    const updatedFilms = films.map((film) => {
      if (film === filmToUpdate) {
        return { ...film, watched: !film.watched };
      } else {
        return film;
      }
    });
    setFilms(updatedFilms);
  };

  const addFilm = (filmToAdd) => {
    setFilms((currentFilms) => {
      return [filmToAdd, ...currentFilms];
    });
  };

  return (
    <>
      <FilmAdder addFilm={addFilm} />
      <div>
        {films.map((film) => {
          return (
            <FilmCard
              key={film.imageUrl}
              updateWatched={updateWatched}
              film={film}
            />
          );
        })}
      </div>
    </>
  );
}
