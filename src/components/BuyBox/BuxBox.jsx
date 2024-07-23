import Stars from '../../../public/images/details/stars.png';
import './BuyBox.scss';

export default function BuyBox(props) {    
    const { produto } = props;
    console.log(produto)

    return (
        <div>
            <h1 className="productName">{produto.name}</h1>
            <p className="productRef">{produto.ref}</p>
            <div className="ProductReviews">
                <img src={Stars} />
                <div className="productRating">
                    <p>{produto.rating}</p>
                    <i class="bi bi-star-fill text-light"></i>
                </div>
                <p className="pReview">{produto.reviews}</p>
            </div>
            <div className="productPrice">
                <span className="real">R$</span>
                <p className="pPrice">{produto.price - produto.priceDiscount}</p>
                {produto.priceDiscount>0 && <p className="priceDiscount">{produto.price}</p>}
                
            </div>
            <div className="description">
                <h4>Descrição do produto</h4>
                <p>{produto.description}</p>
            </div>
            <div className="size">
                <h4>Tamanho</h4>
                <div className="sizeOptions">
                    {produto.sizeOptions.map((size, index) => (
                        <button key={index}>{size}</button>
                    ))}
                </div>        
            </div>
            <div className="color">
                <h4>Cor</h4>
                <div className="colorOptions">
                    {produto.colorOptions.map((color, index) => (
                        <button key={index} style={{backgroundColor: color}}></button>
                    ))}
                </div>
            </div>
            <button className="buy">Comprar</button>
        </div>
    )
}