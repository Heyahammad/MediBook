import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TopDoctors from "../components/TopDoctors";
function Home() {
  return (
    <div>
      <Header />
      <Filter />
      <TopDoctors />
      <Banner />
    </div>
  );
}

export default Home;
