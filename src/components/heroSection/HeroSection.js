import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-main-container">
      <div className="hero-section-main">
        <div className="filtersDiv"></div>
        <div className="sliderDiv">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://assets.mspimages.in/wp-content/uploads/2021/08/redmibook-2-1-1.png"
                  style={{height:'500px'}}
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://assets.mspimages.in/wp-content/uploads/2021/08/redmibook-2-1-1.png"
                  alt="Second slide"
                  style={{height:'500px'}}
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://assets.mspimages.in/wp-content/uploads/2021/08/redmibook-2-1-1.png"
                  alt="Third slide"
                  style={{height:'500px'}}
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              {/* <span class="sr-only">Previous</span> */}
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              {/* <span class="sr-only">Next</span> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
