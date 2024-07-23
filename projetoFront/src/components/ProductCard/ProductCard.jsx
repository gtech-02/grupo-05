import { Link } from "react-router-dom";
import "./ProductCard.scss";

export default function ProductCard({ product }) {
  let productImage = Array.isArray(product.image) ? product.image[Math.floor(Math.random() * 4)] : product.image;
  return (
    <Link to={`/produtos/${product.id}`} style={{ textDecoration: "none" }}>
      <div className="product-card">
        <img className='img' src={productImage} alt={product.name}/>
        <p className="tipo">Tênis</p>
        <h3 className="nomeProduto">{product.name}</h3>
        <div className="precos">
        {product.priceDiscount > 0 ? (
          <>
            <p className="priceAntigo">R$ {product.price}</p>
            <p className="price">R$ {product.price - product.priceDiscount}</p>
          </>
        ) : (
          <p className="price">R$ {product.price}</p>
        )}
        </div>
      </div>
    </Link>
  );
}
