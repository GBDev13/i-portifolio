import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import BannerProjeto from '../../../components/BannerProjeto';
import React from 'react';
import { getPrismicClient } from '../../../services/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import LoadingScreen from '../../../components/LoadingScreen';
 
interface IProjeto {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({projeto}: ProjetoProps ) {

    const router = useRouter();

    if(router.isFallback) {
        return <LoadingScreen />
    }
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
               title={projeto.title} 
               type={projeto.type}
               imgUrl={projeto.thumbnail}
            />

            <main>
                <p>
                    {projeto.description}
                </p>
                <button type="button">
                    <a href={projeto.link}>Ver projeto online</a>
                </button>
            </main>
        </ProjetoContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();
    const projetos = await prismic.query([
        Prismic.Predicates.at('document.type', 'iportfoli')
    ]);

    const paths = projetos.results.map(projeto => ({
        params: {
            slug: projeto.uid
        }
    }))

    return {
        paths,
        fallback: true
    }
};
  
export const getStaticProps: GetStaticProps = async context  => {
    const prismic = getPrismicClient();
    const { slug } = context.params;

    const response = await prismic.getByUID('iportfoli', String(slug), {})

    console.log(response)
    
    const projeto = {
        slug: response.uid,
        title: response.data.title,
        type: response.data.type,
        description: response.data.description,
        link: response.data.link?.url,
        thumbnail: response.data.thumbnail.url
    }
    console.log(response);
    
    return {
      props: {
        projeto
      },
      revalidate: 86400
    } 
  }