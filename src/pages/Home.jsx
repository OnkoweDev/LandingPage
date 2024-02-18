import React, { useEffect } from "react";
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
import DemoImg1 from "./../assets/demo-1.svg";
import DemoImg2 from "./../assets/demo-2.svg";
import DemoImg3 from "./../assets/demo-3.svg";
import DemoImg4 from "./../assets/demo-4.svg";
import DemoImg5 from "./../assets/demo-5.svg";
import DemoImg6 from "./../assets/demo-3.svg";
import AppCommunityCard from "../components/community-card";
import AppPricingCard from "../components/pricing";
import AppFaq from "../components/faq";
import AppNewsLetter from "../components/newsletter";
import AppFooterSection from "../components/footer";
import AOS from "aos";
const Home = () => {
  /*Init the AOS library */
  useEffect(() => {
    AOS.init();
  }, []);
  const communityUsers = [
    {
      id: 1,
      name: "Jessica",
      job: "writer",
      rating: 4.6,
      image: DemoImg1,
      comment: "Olukowe has really made my writing remarkable.",
    },
    {
      id: 2,
      name: "Mark",
      job: "freelancer",
      rating: 4.7,
      image: DemoImg2,
      comment:
        "As a Freelancer Olukowe has helped me create some amazing content.",
    },
    {
      id: 3,
      name: "Paul Micheal",
      job: "blogger",
      rating: 4.5,
      image: DemoImg3,
      comment: "Thanks to Olukowe, I now blog with confidence",
    },

    {
      id: 4,
      name: "Emmanuel",
      job: "technical writer",
      rating: 4.7,
      image: DemoImg4,
      comment: "As a writer, Olukowe has helped me create some amazing content",
    },

    {
      id: 5,
      name: "Wale",
      job: "technical writer",
      rating: 4.8,
      image: DemoImg5,
      comment: "As a writer, Olukowe has helped me create some amazing content",
    },

    {
      id: 6,
      name: "Williams",
      job: "technical writer",
      rating: 4.9,
      image: DemoImg6,
      comment: "As a writer, Olukowe has helped me create some amazing content",
    },
  ];
  const allUsersCommentAndRating = communityUsers.map((communityUser) => {
    const { id, image, name, job, rating, comment } = communityUser;
    return (
      <AppCommunityCard
        key={id}
        image={image}
        profileName={name}
        profileJob={job}
        rating={rating}
      >
        {comment}
      </AppCommunityCard>
    );
  });
  return (
    <React.Fragment>
      <section
        className="brand-primary-bg-color"
        style={{ overflowX: "hidden" }}
      >
        <AppHeader />
        <AppHero />
        <h1 className="fs-1 text-capitalize fw-bold brand-white-text text-center my-md-4 my-3 py-md-3 py-2">
          use case
        </h1>
        <section className="usercase-section d-flex flex-md-row flex-column  align-items-center justify-content-around  my-4">
          <UserCaseContainer
            image={ProductImg}
            headerText={"product description generator"}
            className="mx-3 my-3"
            data-aos="slide-right"
            data-aos-duration="1200"
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
            headerText={"landing page content generator"}
            className="mx-3 my-3"
            data-aos="slide-left"
            data-aos-duration="1200"
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
            <p
              className="px-1 brand-small-text-3 text-white-100 text-muted"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
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
            <p
              className="px-1 brand-small-text-3 text-muted"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Working with a team makes work easier and accelerates the time
              taken to get a project completed . Do you want to delegate parts
              of a whole project to members of your team and make them work on
              it concurrently? What about having a team that evaluates your
              project at the same as you are doing your work. Olukeowe makes
              working with a team easier as barriers to physical meetings are
              removed while working with a team on real-time writing projects.
            </p>

            <Button
              className="brand-custom-button text-capitalize brand-small-text-3 px-3 my-4"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              learn more
            </Button>
          </AppSubHeroSection>
        </section>

        <h3
          className="fs-3 text-capitalize fw-bold brand-white-text text-center my-md-4 my-3 py-md-3 py-2"
          data-aos="slide-up"
          data-aos-duration="200"
        >
          Hear What The Community of Users Has To Say
        </h3>
        <section
          className="container"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <section className="community-section row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {allUsersCommentAndRating && allUsersCommentAndRating}
          </section>
        </section>
        <br />

        <h3 className="fs-3 text-capitalize fw-bold brand-white-text text-center my-md-5 my-4 py-md-3 py-2">
          pricing
        </h3>
        <section className="pricing-container container p-md-0 p-4">
          <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <AppPricingCard
              cardTitle="free plan"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <section className="my-5 py-5">
                <br />
                <br />
              </section>
            </AppPricingCard>

            <AppPricingCard
              cardTitle="paid plan"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <section className="my-5 py-5">
                <br />
                <br />
              </section>
            </AppPricingCard>
          </section>
        </section>
        <br />
        <br />
        <h3 className="fs-3 text-capitalize fw-bold brand-white-text text-center my-md-4 my-3 py-md-3 py-2">
          frequently asked questions
        </h3>

        <section
          className="container faq-container brand-primary-bg-color width-toggle-3"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <AppFaq
            eventKey={"0"}
            accordionHeader={"How many people can I share my writing with?"}
            className=""
          ></AppFaq>

          <AppFaq
            eventKey={"1"}
            accordionHeader={
              "If I subscribe to a monthly plan, will I be charged automatically next month?"
            }
          ></AppFaq>
          <AppFaq
            eventKey={"2"}
            accordionHeader={
              "How is the pricing of Olukowe compare with Jasper?"
            }
          ></AppFaq>
          <AppFaq
            eventKey={"3"}
            accordionHeader={"Can I translate with Olukowe?"}
          ></AppFaq>

          <AppFaq
            eventKey={"4"}
            accordionHeader={"How does your pricing work?"}
          ></AppFaq>
        </section>
        <br />
        <br />
        <section
          className="newsletter-container container m-auto "
          data-aos="flip-up"
          data-aos-duration="600"
        >
          <AppNewsLetter></AppNewsLetter>
        </section>
        <section className="my-5 py-5"></section>

        <section className="footer-section-container container">
          <AppFooterSection />
        </section>
      </section>
    </React.Fragment>
  );
};

export default Home;
