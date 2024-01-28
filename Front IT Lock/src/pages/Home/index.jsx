import React from "react";
import Cards from "../../components/Cards";
import { Helmet } from "react-helmet-async";
import Solition from "../../components/Solition";
import Work from "../../components/Work";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="home">
        <Solition/>
        <Cards />
        <Work/>
        </div>
    </>
  );
}

export default Home;
