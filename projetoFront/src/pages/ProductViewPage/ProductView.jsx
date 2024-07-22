import ProductListing from "../../components/ProductListing/ProductListing";
import Layout from "../Layout/Layout";
import produtosView from '../../json/produtosView.json'

const ProductView = () => {
    return (
        <>
        <Layout>
            <CarouselDetails/>
            <ProductListing legenda={"Produtos Relacionados"} produtos={produtosView} limit={4}/>
        </Layout>
        </>
    )
}

export default ProductView