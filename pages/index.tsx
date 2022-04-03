import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Seo from './Seo'
import styles from "./index.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const Home: NextPage = ({results}:InferGetServerSidePropsType<GetServerSideProps>) => {

  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {results?.map((movie: IMovieProps) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    // await fetch(`http://localhost:3000/api/movies`)
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

export default Home
