import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,

    });
  }

  function handleChange(infoDoEvento) {
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('Vamuu');
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://comedix.herokuapp.com/categorias';
    fetch(URL).then(async (resposta) => {
      const respostaObj = await resposta.json();
      setCategorias([
        ...respostaObj,
      ]);
    });

  //   setTimeout(() => {
  //     setCategorias([
  //       ...categorias,
  //       {
  //         id: 1,
  //         nome: 'Stand Up',
  //         descricao: 'Comedia da comedia br',
  //       },
  //       {
  //         id: 2,
  //         nome: 'Memes',
  //         descricao: 'Topen Comedia da comedia br',
  //       },
  //     ]);
  //   }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Try again');
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          type="text"
          label="Nome da Categoria:"
          name="nome"
          value={values.nome}
          onChange={handleChange}

        />

        <FormField
          type="textarea"
          label="Descrição:"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}

        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button style={{ background: 'var(--black)' }}>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
