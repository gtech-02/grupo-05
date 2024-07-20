import Layout from "../Layout/Layout";
import ProductListing from "../../components/ProductListing/ProductListing";
import produtosList from '../../json/produtosListing.json'
import Ordenar from "../../components/OrdenarPor/ordenarpor";

const ProductListingPage = () => {
    return (
        <>
        <Layout>
            <Ordenar/>
            <ProductListing limit={15}  produtos={produtosList}/>
        </Layout>
        </>
    )
}

export default ProductListingPage