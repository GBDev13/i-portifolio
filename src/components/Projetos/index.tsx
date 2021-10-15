import SectionTitle from '../../components/SectionTitle';
import ProjetoItems from './ProjetoItems';
import { Container } from './styles';

import Link from 'next/link';

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


function Projetos({ projetos }: ProjetoProps) {
    return (
    <Container>
      <SectionTitle title="Alguns Projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItems 
          key={projeto.slug}
          img={projeto.thumbnail}
          title={projeto.title}
          type={projeto.type}
          slug={projeto.slug}
         /> 
        ))}
       
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>
            Ver todos os projetos
          </a>
        </Link>
      </button>
    </Container>
  );
};

export default Projetos;