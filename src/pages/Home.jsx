import React from "react";
import AppHeader from "../components/header";
import AppHero from "../components/hero";
import ProductImg from "./../assets/product.svg";
import LandingPageImg from "./../assets/landing-page.svg";
import UserCaseContainer from "../components/user-case";
import GirlWithLaptopImg from "./../assets/girlWithLaptop.svg";
import IpadImg from "./../assets/ipad.svg";
import AppSubHeroSection from "../components/sub-hero";
import EbookImg from "./../assets/ebook.svg";
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
            <p className="px-1 brand-small-text-3 text-muted">
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
            <p className="px-1 brand-small-text-3 text-muted">
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
        <section className="sub-hero-section-container d-flex align-items-center justify-content-around flex-column mx-3">
          <AppSubHeroSection
            headerImage={EbookImg}
            headerText="share your work with other writers"
            subHeroImage={IpadImg}
            className={"my-5 py-4"}
          >
            <p className="px-1 brand-small-text-3 text-muted">
              Thousand of writers, bloggers, and marketers can rapidly create
              100% original books with Olukowe’s Ebook authoring platform and
              additionally, we’ll help you with the book publishing procedure.
              Our AI assistance helps you in further refining and enhancing
              either your blog posts or publications. Since we offer options for
              how you wish to write the book, you can use a variety of methods.
            </p>
          </AppSubHeroSection>

          <AppSubHeroSection
            headerText="Finally, Writing is no longer a challenging task."
            subHeroImage={GirlWithLaptopImg}
          >
            <p className="px-1 brand-small-text-3 text-muted">
              Working with a team makes work easier and accelerates the time
              taken to get a project completed . Do you want to delegate parts
              of a whole project to members of your team and make them work on
              it concurrently? What about having a team that evaluates your
              project at the same as you are doing your work. Olukeowe makes
              working with a team easier as barriers to physical meetings are
              removed while working with a team on real-time writing projects.
            </p>

            <Button className="brand-custom-button text-capitalize brand-small-text-3 px-3 my-3">
              learn more
            </Button>
          </AppSubHeroSection>
        </section>
          <section className="community-section">
            
          </section>
      </section>
    </React.Fragment>
  );
}

export default Home;

