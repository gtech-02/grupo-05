import ProductListingView from "../../components/ProductListingView/ProductListingView";
import Layout from "../Layout/Layout";

const ProductView = () => {
    return (
        <>
        <Layout>
        <ProductListingView limit={4}/>
        </Layout>
        </>
    )
}

export default ProductView