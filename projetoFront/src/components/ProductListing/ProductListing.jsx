import ProductCard from "../ProductCard/ProductCard"
import './ProductListing.scss'
export default function ProductListing({legenda, produtos, limit }){
   

        let produtosLimitados = limit ? produtos.slice(0, limit) : produtos;

        return (
                <>
                <div className="flex">
                <div className="content">
            
            
                <h2 className="titleCards">{legenda}</h2>
                </div>  
            <div className="cards">
            
                {produtosLimitados.map(produto =>(
                    <ProductCard key={produto.id} product={produto}/>
                ))}
            </div>
    
                        
            </div>
            
            </>
        )
    }
    
    
