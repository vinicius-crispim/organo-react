import Botao from '../Botao';
import Colaborador from '../Colaborador';
import './Time.css'



const Time = (props) => {
    
    const aoExcluir = (event) => {
        event.preventDefault();
        console.log("A")
        props.aoExcluirTime({
            nome: props.nome,
            corPrimaria: props.corPrimaria,
            corSecundaria: props.corSecundaria
        })
    }

        return (
            (props.colaboradores.length > 0 ) && 
            <section className='time' style={{ backgroundColor: props.corSecundaria}}>
                <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(c => <Colaborador key={c.nome} colaborador={c} corPrimaria={props.corPrimaria}/>)}
                </div>
                <form onSubmit={aoExcluir}>
                    <Botao type='submit'>
                        Excluir time
                    </Botao>
                </form>
            </section>           
        )
}

export default Time;