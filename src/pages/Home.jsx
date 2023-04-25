import React from "react";
import AppHeader from "../components/header";
import AppHero from "../components/hero";
import ProductImg from "./../assets/product.svg";
import LandingPageImg from "./../assets/landing-page.svg";
import UserCaseContainer from "../components/user-case";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <React.Fragment>
      <section className="brand-primary-bg-color">
        <AppHeader />
        <AppHero />
        <h1 className="fs-1 text-capitalize fw-bold brand-white-text text-center my-md-4 my-3 py-md-3 py-2">
          user case
        </h1>
        <section className="usercase-section d-flex flex-md-row flex-column  align-items-center justify-content-between w-100 my-4">
          <UserCaseContainer
            image={ProductImg}
            headerText={"product description generator"}
            className="mx-3 my-3"
          >
            <p  className="px-1 brand-small-text-3 text-muted">
              With so much that has to be done almost at the same time , it
              could be very challenging operating operating an ecommerce
              business. One of the most important things to be done is to
              consistently create an attention-grabbing description for
              different products, which could be a daunting task. But why should
              you get stressed over that when you could effortlessly get that
              done by simply using Olukowe’s product description generator.
            </p>
            <Button className="brand-custom-button text-capitalize brand-small-text-3 px-3 my-3">
              learn more
            </Button>
          </UserCaseContainer>

          <UserCaseContainer
            image={LandingPageImg}
            headerText={"product description generator"}
            className="mx-3 my-3"
          >
            <p  className="px-1 brand-small-text-3 text-muted">
              The goal every of every marketer is for their marketing campaign
              to convert as many audiences as possible, and for their conversion
              goal to the met, a lot of work has to go into the campaign. A
              landing page with very good content is one of the most important
              tools in marketing and does it get any easy writing content for
              landing pages? I do not think so.
            </p>
            <Button className="brand-custom-button text-capitalize brand-small-text-3 px-3 my-3">
              learn more
            </Button>
          </UserCaseContainer>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Home;

