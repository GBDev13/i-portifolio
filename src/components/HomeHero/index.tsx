import { Container , TextContainer, InfosContainer, CodeItem} from './styles';


import picture from '../../assets/images/myLogoD2.png';

import { BsArrowDown } from 'react-icons/bs';



function HomeHero() {
  return (
    <Container>
      <img src={ picture } alt="Imagem Hero" />
      
      <div>
        <TextContainer>
        <h1>Olá! </h1>
        <h2>Eu sou Will... </h2>
        </TextContainer>
        <InfosContainer>
           <CodeItem>
             <span className="comment">//Apresentação</span>
             <span className="purple">Infos</span>{'\u007B'}
             <div>
               Nome: <span className="blue">William</span>
             </div>
             <div>
               Sobrenome: <span className="blue">Freittas</span>
             </div>
             {'\u007D'}
           </CodeItem>

           <CodeItem>
             <span className="purple">CARGO</span>{'\u007B'}
             <div>
               funçao: <span className="blue">Front-end developer</span>
             </div>
             <div>
               Empresa: <span className="blue">DJinn'S Code Art</span>
             </div>
             {'\u007D'}
           </CodeItem>
        </InfosContainer>
     </div>
      
    </Container>
     
  );
};

export default HomeHero;
