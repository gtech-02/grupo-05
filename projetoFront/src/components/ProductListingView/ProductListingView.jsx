import ProductCard from "../ProductCard/ProductCard";

export default function ProductListingView({limit}){
    let produtos =  [
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true",
            price: 200,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true",
            price: 49.9,
            priceDiscount: 0
        },
        {
            name: "K-Swiss V8 - Masculino",
            image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true",
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

        let produtosLimitados = produtos.slice(0, limit)

        let produtos1 = produtosLimitados.map(produto =>
            <ProductCard key={produto.name} name={produto.name} image={produto.image} price={produto.price} priceDiscount={produto.priceDiscount}/>);
        
        // let produtos1 = []

        // for(let i = 0; i<produtos.length; i++){
        //     produtos1[i] = <ProductCard name={produtos[i].name} price={produtos[i].price}/>
        // }

    return (
        <>
        <div className="flex">
        <div className="content">
        

        <h2 className="titleCards">Produtos Relacionados</h2>
        </div>  
        <div className="cards">
            

                    {produtos1}
        </div>
        </div>
        </>
    )
}