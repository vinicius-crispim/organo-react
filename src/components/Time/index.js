import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    if(props.colaboradores.length >0){
        return (
            (props.colaboradores.length > 0 ) && 
            <section className='time' style={{ backgroundColor: props.corSecundaria}}>
                <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(c => <Colaborador key={c.nome} colaborador={c}/>)}
                </div>
            </section>
            )
    }
}

export default Time;