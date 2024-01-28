import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Cards() {
  const [products, setproducts] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(null);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("http://localhost:7000/")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  function search(e) {
    setInput(e.target.value);
  }
  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }
  return (
    <>
      <div className="container">
        <div className="globalBrands">
          <div className="header">
            <p>OUR CASE STUDY</p>
            <h1>We work with global brands</h1>
          </div>
          <div className="cardsSection">
            <div className="search">
              <input
                type="text"
                value={input}
                placeholder="Search..."
                onChange={search}
              />
            </div>
            <div className="filter">
              <button onClick={() => setSort({ property: "name", asc: true })}>
                A-Z
              </button>
              <button onClick={() => setSort({ property: "name", asc: false })}>
                Z-A
              </button>
              <button onClick={() => setSort(null)}>Default</button>
              <button onClick={() => setSort({ property: "price", asc: true })}>
                Artan
              </button>
              <button
                onClick={() => setSort({ property: "price", asc: false })}
              >
                Azalan
              </button>
            </div>
            <div className="cards">
              {products
                .filter((x) =>
                  x.name.toLowerCase().includes(input.toLowerCase())
                )
                .sort((a, b) => {
                  if (sort && sort.asc) {
                    return lower(a[sort.property]) > lower(b[sort.property])
                      ? 1
                      : lower(b[sort.property]) > lower(a[sort.property])
                      ? -1
                      : 0;
                  } else if (sort && sort.asc === false) {
                    return lower(a[sort.property]) < lower(b[sort.property])
                      ? 1
                      : lower(b[sort.property]) < lower(a[sort.property])
                      ? -1
                      : 0;
                  } else {
                    return 0;
                  }
                })
                .map((x) => (
                  <div className="card" key={x._id}>
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
        </div>
      </div>
    </>
  );
}

export default Cards;
