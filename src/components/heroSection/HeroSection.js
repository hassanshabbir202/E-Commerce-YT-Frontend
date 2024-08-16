import React from "react";
import "./HeroSection.css";
import bannerImg from "../../assets/bannerImg.png"

const HeroSection = () => {
  return (
    <div className="hero-section-main-container">
      <div className="hero-section-main">
        <div className="filtersDiv">
 
          <div className="filterLinks">
          <a href="#">Woman’s Fashion</a>
           <a href="#">Men’s Fashion</a>
           <a href="#">Electronics</a>
           <a href="#">Home & Lifestyle</a>
           <a href="#">Medicine</a>
           <a href="#">Sports & Outdoor</a>
           <a href="#">Baby’s & Toys</a>
           <a href="#">Groceries & Pets</a>
           <a href="#">Health & Beauty</a>
          </div>

        </div>
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
                  src={bannerImg}
                  style={{height:'370px'}}
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={bannerImg}
                  alt="Second slide"
                  style={{height:'370px'}}
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={bannerImg}
                  alt="Third slide"
                  style={{height:'370px'}}
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
