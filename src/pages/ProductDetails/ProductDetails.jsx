import './ProductDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import produtos from '../../json/produtosListing.json';
import Layout from '../Layout/Layout';
import CarouselDetails from '../../components/CarouselDetails/CarouselDetails';
import ProductListing from "../../components/ProductListing/ProductListing";
import BuyBox from '../../components/BuyBox/BuxBox';

export default function ProductDetails() {
    let { id } = useParams();
    let produto = produtos.find(p => p.id.toString() === id);

    return (
        <Layout>
            <section className="product-details-container">
                {produto ? (
                    <>
                        <CarouselDetails produto={produto} />
                        <BuyBox produto={produto} />

                    </>
                ) : (
                    <p>Produto não encontrado</p>
                )}
            </section>
            <ProductListing legenda={"Produtos Relacionados"} produtos={produtos} limit={4}/>
        </Layout>
    );
}