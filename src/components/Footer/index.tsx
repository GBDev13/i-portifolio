import React from 'react';

import { Container } from './styles';

import { FaGithubAlt } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineCopyrightCircle} from 'react-icons/ai';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  
  function handleScrollTo() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTo}>
          Voltar ao topo
        </button>
        <div className="copyright">
           <AiOutlineCopyrightCircle className="icon"/> 
           <span>Developed by Will - From Djinn's Web Art</span> 
        </div>
        
        <section>
          <FaGithubAlt 
            onClick={() => handleRedirect('https://github.com/WdvOps/')}
          />
          <AiFillLinkedin 
            onClick={() => handleRedirect('https://www.linkedin.com/in/will-freittas/')}          
          />
        </section>
      </div>
    </Container>
  );
};

export default Footer;

