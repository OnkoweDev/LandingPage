import React from "react";
import AppHeader from "../components/header";
import AppHero from "../components/hero";
const Home = () => {
  return (
    <React.Fragment>
      <section className="brand-primary-bg-color">
        <AppHeader />
        <AppHero />
      </section>
    </React.Fragment>
  );
}

export default Home;

