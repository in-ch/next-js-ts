import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Seo from './Seo'
import styles from "./index.module.css";

interface MovieProps {
  id:number,
  original_title:string,
  poster_path:string,
}

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <Seo
        title="Home"
      />
      <br/>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie:MovieProps) => (
        <div className={styles.movie} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
      
  )
}

export default Home
