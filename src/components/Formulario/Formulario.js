import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) =>{
    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const initialState = {
        corSecundaria: "",
        corPrimaria: "",
        nome: ""
      };
 
    const aoSalvarTime = (event) => {
        event.preventDefault();
        props.aoCadastradoTime(criaTime)
        setCriaTime({...initialState})
        console.log(criaTime)
        console.log(initialState)
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [criaTime, setCriaTime] = useState(initialState);

    return (
        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto
                obrigatorio={true} 
                label='Nome' 
                placeHolder='Digite seu nome' 
                valor={nome} 
                aoAlterado={valor => setNome(valor)}/>
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeHolder='Digite seu cargo'
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label='Imagem' 
                placeHolder='Insira o url da sua imagem'
                valor={imagem} 
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para adicionar um novo time:</h2>
                <CampoTexto
                obrigatorio={true} 
                label='Time' 
                placeHolder='Digite o nome do time' 
                valor={criaTime.nome} 
                aoAlterado={valor => setCriaTime({...criaTime, nome: valor})}/>
                <CampoTexto
                obrigatorio={true} 
                label='Cor primária' 
                placeHolder='Cor em hexadecimal' 
                valor={criaTime.corPrimaria} 
                aoAlterado={valor => setCriaTime({...criaTime, corPrimaria: valor})}/>
                <CampoTexto
                obrigatorio={true} 
                label='Cor secundária' 
                placeHolder='Cor em hexadecimal:' 
                valor={criaTime.corSecundaria} 
                aoAlterado={valor => setCriaTime({...criaTime, corSecundaria: valor})}/>
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;