
import ProductListing from "../../components/ProductListing/ProductListing";
import './Home.scss'
import Gallery from "../../components/Gallery/gallery-slide";
import Collection from "../../components/Collection/Collection";
import Layout from "../Layout";

const Home = () => {
    return (
        <>
        <Layout>

        <div className="cards">
        <Gallery/>
        <Collection/>
        <ProductListing/>
        </div>
        </Layout>
        </>
    )
}

export default Home