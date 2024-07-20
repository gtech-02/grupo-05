
import ProductListing from "../../components/ProductListing/ProductListing";
import Layout from "../Layout/Layout";
import produtosHome from '../../json/produtosHome.json'

const ProductView = () => {
    return (
        <>
        <Layout>
            <ProductListing legenda={"Produtos Relacionados"} produtos={produtosHome} limit={4}/>
        </Layout>
        </>
    )
}

export default ProductView