import './ProductDetails.scss';
import { useParams } from 'react-router-dom';
import produtos from '../../json/produtosHome.json';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function ProductDetails() {
    let { id } = useParams();
    let produto = produtos.find(p => p.id.toString() === id);

    return (
        <>
            <Header />
            <div className="product-details-container">
                {produto ? (
                    <div>
                        <h2>{produto.name}</h2>
                        <img className="img" src={produto.image} alt={produto.name} />
                        <p>Preço: R$ {produto.price}</p>
                    </div>
                ) : (
                    <p>Produto não encontrado</p>
                )}
            </div>
            <Footer />
        </>
    );
}