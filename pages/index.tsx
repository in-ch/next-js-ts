import type { NextPage } from 'next'
import { useState } from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Seo from './Seo';

const Container = styled.div`
  width:50px;
  height:50px;
  border:1px solid #000;
`;

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Home"
      />
      <h1>asdfasdfas</h1>
    </>
      
  )
}

export default Home
