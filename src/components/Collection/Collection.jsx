import "./Collection.scss"
import imagens from "../../json/collection.json"

const Collection = () => {
    return (
      <>
<h2 className="titulocollection"> Coleções em Destaque</h2>
        <div class="container text-center" id="colecao">
            
            {imagens.map(item =>(
  <div class="row colecoes">
    <div class="col">
      <img src={item.image}/>
    </div>
  </div>))}
</div>

</>
    )  
}

export default Collection