import React from "react";
import "./FlashSalesCard.css";
import cardImage from "../../assets/card-image.png";

const FlashSlaesCard = () => {
  return (
    <div className="main-card-body">
      <div className="main-cards-div">
        <div class="card-div">
          <div className="prdocut-image-parent">
            <img src={cardImage} class="card-img-top" alt="..." />
            <div className="badge-div">
              <p>-40%</p>
            </div>
            <div className="wish-list-div">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="view-div">
              <i class="fa-sharp fa-regular fa-eye"></i>
            </div>
          </div>

          <div class="card-body">
            <p class="card-text py-3">HAVIT HV-G92 Gamepad</p>
            <p className="product-price">$120</p>
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>
            </div>
          </div>
        </div>
        <div class="card-div">
          <div className="prdocut-image-parent">
            <img src={cardImage} class="card-img-top" alt="..." />
            <div className="badge-div">
              <p>-35%</p>
            </div>
            <div className="wish-list-div">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="view-div">
              <i class="fa-sharp fa-regular fa-eye"></i>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text py-3">HAVIT HV-G92 Gamepad</p>
            <p className="product-price">$120</p>
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>
            </div>
          </div>
        </div>{" "}
        <div class="card-div">
          <div className="prdocut-image-parent">
            <img src={cardImage} class="card-img-top" alt="..." />
            <div className="badge-div">
              <p>-30%</p>
            </div>
            <div className="wish-list-div">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="view-div">
              <i class="fa-sharp fa-regular fa-eye"></i>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text py-3">HAVIT HV-G92 Gamepad</p>
            <p className="product-price">$120</p>
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>
            </div>
          </div>
        </div>{" "}
        <div class="card-div">
          <div className="prdocut-image-parent">
            <img src={cardImage} class="card-img-top" alt="..." />
            <div className="badge-div">
              <p>-25%</p>
            </div>
            <div className="wish-list-div">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div className="view-div">
              <i class="fa-sharp fa-regular fa-eye"></i>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text py-3">HAVIT HV-G92 Gamepad</p>
            <p className="product-price">$120</p>
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label for="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label for="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label for="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label for="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label for="1">☆</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSlaesCard;
