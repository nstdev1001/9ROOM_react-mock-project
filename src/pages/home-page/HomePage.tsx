import { Fragment } from "react";

import Footer from "../../components/Footer";
import Hero from "./Hero";
import Explore from "./Explore";
import Blogs from "./Blogs";
import Locations from "./Locations";
import HotelCollection from "./HotelCollection";
import Banner from "./Banner";
import "../../style/sass/home-page-scss/_home-page-res.scss";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <main
        className="container col-sm-12 col-md-11 px-4 px-sm-5 mb-5"
        style={{ marginTop: "120px" }}
      >
        <section className="banner-res">
          <Banner />
        </section>
        <HotelCollection />
        <Explore />
        <Blogs />
        <Locations />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
