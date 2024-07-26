import './Ordenarpor.scss'

const Ordenar = () => {


    return (

        <div className="form-ordenar">
     <label><strong>Ordenar por</strong></label>
    <select className="form-select" aria-label="Default select example">
      <option value="fixa" disabled selected>Preço:</option>
      <option  value="1">Menor Preço</option>
      <option  value="2">Maior Preço</option>
    </select>
  </div>


    )
}

export default Ordenar