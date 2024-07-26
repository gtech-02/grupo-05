import Layout from "../Layout/Layout";
import ProductListing from "../../components/ProductListing/ProductListing";
import produtosList from '../../json/produtosListing.json'
import './ProductListingPage.scss'
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import Ordenar from "../../components/OrdenarPor/Ordenarpor";

const ProductListingPage = () => {
    return (
        <>
        <Layout>
            <div className="containerMain">
            <Ordenar/>
                <div className="contentMain">
            <FilterGroup/>
            <ProductListing limit={15}  produtos={produtosList}/>
            </div>
            </div>
        </Layout>
        </>
    )
}

export default ProductListingPage