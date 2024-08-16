import React from "react";
import "./FlashSales.css";
import FlashSlaesCard from "../flashSalesCard/FlashSlaesCard";

const FlashSales = () => {
  return (
    <>
      <div className="flash-sales-container">
         <div className="main-flash-sales">
          <div className="todays-main-c">
            <div className="todays-main-div"></div>
            <p className="todays">Today's</p>
          </div>

          <div className="flash-left-to-right">
            <div className="flash-sales-inner">
              <div className="flash-sales-text">
                <h1>Flash Sales</h1>
              </div>
              <div className="time-left-to-flash-sales">
                <div className="main-days-div">
                  <p className="time-main">Days</p>
                  <div className="flex-div">
                    <p className="days">03</p>{" "}
                    <div className="time-column">:</div>
                  </div>
                </div>

                <div className="main-days-div">
                  <p className="time-main">Hours</p>
                  <div className="flex-div">
                    <p className="hours">23</p>{" "}
                    <div className="time-column">:</div>
                  </div>
                </div>

                <div className="main-days-div">
                  <p className="time-main">Minutes</p>
                  <div className="flex-div">
                    <p className="minutes">19</p>{" "}
                    <div className="time-column">:</div>
                  </div>
                </div>

                <div>
                  <p className="time-main">Seconds</p>
                  <div className="flex-div">
                    <p className="seconds">56</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="previous-and-next-main">
              <div className="previous">
                <i class="fa-sharp fa-solid fa-arrow-left"></i>
              </div>
              <div className="next">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        <FlashSlaesCard />
    </>
  );
};

export default FlashSales;
