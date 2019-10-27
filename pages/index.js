import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

import Header from '../components/header'
import Contex from '../components/contex'
import Footer from '../components/footer'
import HeadMod from '../components/head'
import { Button } from 'reactstrap';
 



const Home = () => (
  <div>
  <HeadMod title={'Sinun tarinasi'} />
    
    <main>
    
      <Header />
      <Contex />
      
    </main>
<Footer />

  </div>
)

export default Home
