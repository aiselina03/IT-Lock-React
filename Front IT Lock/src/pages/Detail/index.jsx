import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Detail() {
  const [products, setproducts] = useState([]);
  let { id } = useParams();
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:7000/" + id)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container">
        <div className="detail">
          <div className="card">
            <i
              className={`${
                checkIsWishlist(products)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }`}
              onClick={() => addRemoveWishlist(products)}
            ></i>
            <img src={products.image} alt="" />
            <div className="addToCard" onClick={() => addBasket(products)}>
              <h3>Add to Card</h3>
            </div>
            <div className="text">
              <h3>{products.name}</h3>
              <p>{products.desc}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt voluptate beatae enim minus necessitatibus ea magni mollitia placeat officiis, optio alias hic tempore itaque. Sequi soluta eligendi minus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h3>${products.price}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
