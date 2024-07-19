import ProductListing from "../../components/ProductListing/ProductListing";
import './Home.scss'
import Layout from "../Layout";

const Home = () => {
    return (
        <>
        <Layout>
        <div className="cards">
        <ProductListing/>
        </div>
        </Layout>
        </>
    )
}

export default Home