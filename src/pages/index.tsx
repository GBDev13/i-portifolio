import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
//import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
//import 'aos/dist/aos.css';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
  //  Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Portfolio | i-Portfólio</title>
        <meta
          name="description"
          content="Estou evoluindo como desencolvedor Front-end, e aqui exponho alguns projetos que desenvolvi durante essa jornada mágica!"
        />
        <meta property="og:image" content="./public/ogimage.png" />
        <meta property="og:image:secure_url" content="./public/ogimage.png" />
        <meta name="twitter:image" content="./public/ogimage.png" />
        <meta name="twitter:image:src" content="./public/ogimage.png" />
        <meta
          property="og:description"
          content="Estou evoluindo como desencolvedor Front-end, e aqui exponho alguns projetos que desenvolvi durante essa jornada mágica!"
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'iportfoli')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};