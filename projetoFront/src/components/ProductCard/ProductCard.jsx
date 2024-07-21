import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard({product}) {
    return (
        <Link to={`/produtos/${product.id}`} style={{ textDecoration: 'none' }}>
            <div className="product-card">
                <img className='img' src={product.image} alt={product.name}/>
                <p className='tipo'>Tênis</p>
                <h3 className='nomeProduto'>{product.name}</h3>
                <p className='price'>R$ {product.price}</p>
            </div>
        </Link>
    );
}