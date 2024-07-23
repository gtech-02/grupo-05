import './CarouselDetails.scss'

export default function CarouselDetails(props) {
    const { produto } = props;

    if (!produto || !produto.image) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="detailsContainer">
            <div id="carouselDetails" className="carousel slide">
                <div className="carousel-inner">
                    {produto.image.map((imgSrc, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={`${imgSrc}`} className="img-details" alt={`Imagem ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselDetails"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselDetails"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="imgOptions">
                {produto.image.map((imgSrc, index) => (
                    <>
                    
                    <button 
                        data-bs-target="#carouselDetails" 
                        data-bs-slide-to={`${index}`}
                        className="buttonCarousel"
                    >
                        <img
                            key={index}
                            src={`${imgSrc}`}
                            className="img-options"
                        />
                    </button>
                    </>
                    
                ))}
            </div>
        </div>
    );
}