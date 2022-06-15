import React, { useState } from "react";
import blue from "../assets/images/t-navyblue.jpeg";
import red from "../assets/images/t-red.jpeg";
import lightBlue from "../assets/images/t-blue.jpeg";
import maroon from "../assets/images/t-marron.jpeg";

const TShirts = () => {
  const original = 24;
  const discount = original * (50 / 100);

  const [count, setCount] = useState(0);
  const [image, setImage] = useState(blue);

  return (
    <React.Fragment>
      <div className="details-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 details-images mb-4">
              {/* images */}
              <div className="col-sm-12 main-img">
                <img src={image} alt="blue t-shirt" />
              </div>
              <div className="col-sm-12">
                <div className="other-img">
                  <img
                    src={blue}
                    alt="blue t-shirt"
                    className={image === blue ? "img-active" : ""}
                    value="blue"
                    onClick={(e) => {
                      e.preventDefault();
                      setImage(e.target.src);
                    }}
                  />
                  <img
                    src={red}
                    alt="red t-shirt"
                    className={image === red ? "img-active" : ""}
                    value="red"
                    onClick={(e) => {
                      e.preventDefault();
                      setImage(e.target.src);
                    }}
                  />
                  <img
                    src={lightBlue}
                    alt="light blue t-shirt"
                    className={image === lightBlue ? "img-active" : ""}
                    value="lightBlue"
                    onClick={(e) => {
                      e.preventDefault();
                      setImage(e.target.src);
                    }}
                  />
                  <img
                    src={maroon}
                    alt="maroon t-shirt"
                    className={image === maroon ? "img-active" : ""}
                    value="maroon"
                    onClick={(e) => {
                      e.preventDefault();
                      setImage(e.target.src);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              id="carouselExampleControls"
              className="carousel slide small-images"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={blue} alt="blue t-shirt" />
                </div>
                <div class="carousel-item">
                  <img src={red} alt="red t-shirt" />
                </div>
                <div class="carousel-item">
                  <img src={lightBlue} alt="light blue t-shirt" />
                </div>
                <div class="carousel-item">
                  <img src={maroon} alt="maroon t-shirt" />
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ><i class='bx bx-chevron-left'></i></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ><i class='bx bx-chevron-right'></i></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="col-sm-12 col-lg-6 info">
              {/* information */}
              <p className="subtitle text-uppercase">t-shirt company</p>
              <h1 className="title text-capitalize mb-4">
                fall limited edition t-Shirts
              </h1>
              <p className="about">
                These low-profile t-shirts are your perfect casual wear
                companion. Featuring a durable fabric, they'll withstand
                everything the weather can offer.
              </p>
              <div className="price mb-3">
                <div className="col-sm-12 sub-prices">
                  <h3>${discount}.00</h3>
                  <h6 className="offer">50%</h6>
                </div>
                <h6 className="original-price">${original}.00</h6>
              </div>

              <div className="buttons-cart row">
                <div className="adjust col-sm-12 col-md-4 col-lg-5">
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      e.preventDefault();
                      setCount((prevState) =>
                        prevState !== 0 ? (prevState -= 1) : 0
                      );
                    }}
                  >
                    <i className="bx bx-minus fw-bolder"></i>
                  </button>
                  <button className="btn btn-light text-dark">{count}</button>
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      e.preventDefault();
                      setCount((prevState) => (prevState += 1));
                    }}
                  >
                    <i className="bx bx-plus-medical"></i>
                  </button>
                </div>
                <div className="cart col-sm-12 col-md-8 col-lg-7">
                  <button className="btn btn-orange">
                    <i className="bx bx-cart-alt"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TShirts;
