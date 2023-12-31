import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{ props.label }</label>
            <select required={props.obrigatorio} value={props.valor} 
            onChange={event => props.aoAlterado(event.target.value)}>
                <option value="" key="" >Selecione o time</option>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default ListaSuspensa;