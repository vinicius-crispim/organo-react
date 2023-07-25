import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props.placeHolder)
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input type="text" placeholder = {props.placeHolder} />
        </div>
    )
}

export default CampoTexto;