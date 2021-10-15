import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCss3Alt, FaReact, FaAngular } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="ANGULAR" icon={<FaAngular />} />
      </section>
    </Container>
  );
};

export default Conhecimentos;
