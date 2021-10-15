import React from "react";
import Header from "../../components/Header";
import ProjetoItem from "../../components/ProjetoItem";
import { ProjetosContainer } from "../../styles/ProjetosStyles";

import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

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
        <ProjetosContainer >
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
            
        </ProjetosContainer>
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
    thumbnail: projeto.data.thumbnail.url
  }));
  return {
    props: {
      projetos
    },
    revalidate: 86400
  } 
}
