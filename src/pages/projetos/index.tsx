import React from "react";
import Header from "../../components/Header";
import ProjetoItem from "../../components/ProjetoItem";
import { ProjetoContainer } from "../../styles/ProjetoStyles";

import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from "next/head";

interface IProjeto {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
    return (
        <ProjetoContainer >
             
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
              {projetos.map(projeto => (
                 <ProjetoItem 
                 key={projeto.slug}
                 title={projeto.title}
                 type={projeto.type}
                 slug={projeto.slug}
                 imgUrl={projeto.thumbnail}
              />
              ))}
            </main>
            
        </ProjetoContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'iportfoli')],
    { orderings: '[document.first_publication_date desc]' }
  );
  console.log(projectResponse);

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link?.url,
    thumbnail: projeto.data.thumbnail?.url
  }));
  return {
    props: {
      projetos
    },
    revalidate: 86400
  } 
}
