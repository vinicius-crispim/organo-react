import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor} required={props.obrigatorio} type="text" placeholder = {props.placeHolder} />
        </div>
    )
}

export default CampoTexto;