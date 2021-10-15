import React from 'react';
import { useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';

function Form() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [loading, setLoading] = useState(false);

    return (
        <FormContainer>
             <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading} >
        ENVIAR
      </button>
        </FormContainer>
    )
}

export default Form;