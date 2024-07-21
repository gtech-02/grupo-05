import './ProductDetails.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import produtos from '../../json/produtosView.json';
import Layout from '../Layout/Layout';
import CarouselDetails from '../../components/CarouselDetails/CarouselDetails';

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
        </Layout>
    );
}