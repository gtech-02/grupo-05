import './ordenarpor.scss'

const Ordenar = () => {


    return (

        <div class="form-ordenar">
     <label><strong>Ordenar por</strong></label>
    <select class="form-select" aria-label="Default select example">
      <option value="fixa" disabled selected>Preço:</option>
      <option  value="1">Menor Preço</option>
      <option  value="2">Maior Preço</option>
    </select>
  </div>

    )
}

export default Ordenar