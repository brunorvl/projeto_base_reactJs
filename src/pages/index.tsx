import React from 'react'
import Head from 'next/head'

import Android from '../assets/android.svg'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
        <Head>
            <title>Principal</title>
        </Head>


        <Android />
        <h1>Estrutura Basica ReactJS</h1>
        <p>Criado uma estrutura basica para projetos em React e Next - falta instalar estilizadores (tailwind ou MUI)</p>

    </Container>
  )
}

export default Home
