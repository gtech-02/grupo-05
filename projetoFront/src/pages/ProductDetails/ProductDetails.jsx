import './ProductDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import produtos from '../../json/produtosDetails.json';
import Layout from '../Layout/Layout';
import CarouselDetails from '../../components/CarouselDetails/CarouselDetails';
import ProductListing from "../../components/ProductListing/ProductListing";
import produtosView from '../../json/produtosView.json'

export default function ProductDetails() {
    let { id } = useParams();
    let produto = produtos.find(p => p.id.toString() === id);

    return (
        <Layout>
            <section className="product-details-container">
                {produto ? (
                    <>
                        <CarouselDetails produto={produto} />
                        <div>
                            <h1 className="productName">{produto.name} <span>Wild Masculino</span></h1>
                            <p>Casual | Nike | REF:38416711</p>
                            <p>Preço: R$ {produto.price}</p>
                        </div>

                    </>
                ) : (
                    <p>Produto não encontrado</p>
                )}
            </section>
            <ProductListing legenda={"Produtos Relacionados"} produtos={produtosView} limit={8}/>
        </Layout>
    );
}