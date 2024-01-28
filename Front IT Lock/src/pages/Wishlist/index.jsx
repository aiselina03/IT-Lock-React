import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function Wishlist() {
  const { wishlist, addRemoveWishlist,checkIsWishlist  } =
    useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="wishlistContainer">
        <div className="wishlist">
        {wishlist.map((x) => (
          <div className="wishlistcard" key={x._id}>
               <i
                      className={`${
                        checkIsWishlist(x)
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }`}
                      onClick={() => addRemoveWishlist(x)}
                    ></i>
                    <NavLink to={"/detail/" + x._id}>
                      <i className="fa-regular fa-eye"></i>
                    </NavLink>
                    <img src={x.image} alt="" />
                    <div className="text">
                      <h3>{x.name}</h3>
                      <p >{x.desc}</p>
                      <h4>${x.price}</h4>
                    </div>
                    <div className="addToCard" onClick={() => addBasket(x)}>
                      <h3>Add to Card</h3>
                    </div>
          </div>
        ))}
      </div>
      </div>
      
    </>
  );
}

export default Wishlist;
