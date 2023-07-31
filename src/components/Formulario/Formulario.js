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

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

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
        </section>
    )
}

export default Formulario;