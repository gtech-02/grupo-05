import ProductCard from "../ProductCard/ProductCard"
import './ProductListing.scss'
export default function ProductListing(){
   let produtos =  [
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 200,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        }
      
        ];

        let produtos1 = produtos.map(produto =>
            <ProductCard key={produto.name} name={produto.name} image={produto.image} price={produto.price} priceDiscount={produto.priceDiscount}/>);
        
        // let produtos1 = []

        // for(let i = 0; i<produtos.length; i++){
        //     produtos1[i] = <ProductCard name={produtos[i].name} price={produtos[i].price}/>
        // }

    return (
        <>
        <div className="flex">
        <div className="content">
        

        <h2 className="titleCards">Produtos em Alta</h2>
        </div>  
        <div className="cards">
            

                    {produtos1}
        </div>
        </div>
        </>
    )
}