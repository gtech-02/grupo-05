import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery-slide.scss'


import imagens from '../../json/gallery.json';

const Gallery = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {imagens.map((slide, index) => (
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current="true" key={slide.id}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imagens.map((slide, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={slide.id}>
            <img src={slide.image} className="d-block w-100"/> 
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Gallery;