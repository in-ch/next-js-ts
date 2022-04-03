import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Seo from './Seo'

interface MovieProps {
  id:number,
  original_title:string,
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
    <>
      <Seo
        title="Home"
      />
      <br/>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie:MovieProps) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
      
  )
}

export default Home
