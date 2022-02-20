import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src='./images/asia1.jpg' className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src='./images/europa1.jpg' className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./images/europa2.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
  )
}

export default Carousel