
import ProductListing from "../../components/ProductListing/ProductListing";
import './Home.scss'
import Gallery from "../../components/Gallery/gallery-slide";
import Collection from "../../components/Collection/Collection";
import Layout from "../Layout/Layout";

const Home = () => {
    return (
        <>
        <Layout>

        <div className="cards">
        <Gallery/>
        <Collection/>
        <ProductListing limit={8}/>
        </div>
        </Layout>
        </>
    )
}

export default Home