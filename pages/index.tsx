import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import '../styles/globals-style';
import { useState } from 'react';

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <p>Counter {counter}</p>
      <button
        onClick={()=>setCounter((prev)=>prev+1)}
      >+</button>
    </>
      
  )
}

export default Home
