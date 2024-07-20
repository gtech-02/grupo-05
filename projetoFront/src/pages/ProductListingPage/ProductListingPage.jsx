import Layout from "../Layout/Layout";
import ProductListing from "../../components/ProductListing/ProductListing";
import produtosList from '../../json/produtosListing.json'

const ProductListingPage = () => {
    return (
        <>
        <Layout>
            <ProductListing limit={15}  produtos={produtosList}/>
        </Layout>
        </>
    )
}

export default ProductListingPage