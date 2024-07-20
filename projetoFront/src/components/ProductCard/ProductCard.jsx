import './ProductCard.scss'
export default function ProductCard({product}){


    
    return (
        <>

      <div>
      <div className="product-card">
        <img className='img' src={product.image} alt="Produto 1"/>
        <p className='tipo'>Tênis</p>
        <h3 className='nomeProduto'>{product.name}</h3>
        <p className='price'>R$ {product.price}</p>
        
      </div>
    
       </div> </>
    )
}
    {/* <div classNameName="card">
        <div className="imagem">
        <img className="img" src={props.image} alt="" />
        </div>
        <div className="infos">
        <h2>{props.name}</h2>
        <div className='precos'>
        <h3 className={props.priceDiscount>0 ? 'priceNone' : 'price'}>{props.price}</h3>
        <h3 className='priceDiscount'>{props.priceDiscount}</h3>
        </div>
        </div>
    </div> */}