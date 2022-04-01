import type { NextPage } from 'next'
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:50px;
  height:50px;
  border:1px solid #000;
`;

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <p>Counter {counter}</p>
      <button
        onClick={()=>setCounter((prev)=>prev+1)}
      >+</button>
      <Container />
    </>
      
  )
}

export default Home
