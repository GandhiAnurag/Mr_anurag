import React from 'react'
import './myimage.css'

function Image() {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/1.jpg" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/2.jpg" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/3.jpg" className="d-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Image