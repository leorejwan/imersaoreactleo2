import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

//state: guarda dados 

function CadastroCategoria(){
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais); //tem 2 valores: string filmes e uma funcao para alterar o valor

    function setValue(chave, valor) {
      //chave: nome, descricao, bla,ble,bli...
      setValues({
        ...values,
        [chave]: valor //pega a chave correta e define o valor dela. Assim, a chave é um dado dinamico para todos os campos! 
      })
    }

    function handleChange(infosDoEvento){
      // const { getAttribute, value } = infosDoEvento.target; //nao deu certo isso
      // setValue(
      //   getAttribute('name'),
      //   value);
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value)
    }

    useEffect(() => {
      console.log("jshdjhs")

      const urlServer = "http://localhost:8080/categorias/"
      fetch(urlServer)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        console.log(resposta)
      })

    }, 
    [
      values.nome
    ]
    );

    return(
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault()
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)

        }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        /> 


        <FormField 
          label="Descricao"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        /> 


        {/* <div>
        <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao} //valor no textbox
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}


        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        /> 

        {/* <div>
        <label>
            Cor:
            <input
              type="color"
              value={values.cor} //valor no textbox
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}



          <button>
            Cadastrar
          </button>
        </form>

        {categorias.length === 0 && (
          <div>
            loading...
          </div> 
        )}

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

      <Link to="/">
        Ir para Home
      </Link> 

      </PageDefault>
    )
  }

export default CadastroCategoria;