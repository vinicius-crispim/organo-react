import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () =>{

    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'> 
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto label='Nome' placeHolder='Digite seu nome'/>
                <CampoTexto label='Cargo' placeHolder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeHolder='Insira o url da sua imagem'/>
                <ListaSuspensa label='Time' itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;