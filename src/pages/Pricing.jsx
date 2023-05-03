import React from "react";
import AppHeader from "./../components/header";
import AltHero from "../components/Alt-hero";
import PricingContainer from "../components/PricingContainer";
import AppPricingCard from "../components/pricing";
import AppFaq from "../components/faq";
import AppFooterSection from "../components/footer";
const Pricing = () => {
  return (
    <React.Fragment>
      <section className="w-100" style={{ overflowX: "hidden" }}>
        <AppHeader userCasePage={true} className={"brand-alt-hero-bg-color"}>
          <AltHero heroSectionName={"PRICING"} />
        </AppHeader>

        <PricingContainer
          className={
            "bg-light d-flex align-items-center justify-content-around flex-md-row flex-column w-100"
          }
        >
          <AppPricingCard
            className={"bg-light custom-pricing-card p-5 my-3 shadow"}
          >
            <h3 className="fs-3 fw-bold">$0/Month</h3>

            <section className="my-5 py-5"></section>
            <section className="my-2 py-2"></section>
          </AppPricingCard>

          <AppPricingCard
            className={"bg-light custom-pricing-card p-5 my-3 shadow"}
          >
            <h3 className="fs-3 fw-bold">$0/Month</h3>

            <section className="my-5 py-5"></section>
            <section className="my-2 py-2"></section>
          </AppPricingCard>
        </PricingContainer>
        <section className="my-4"></section>

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
        <section className="my-5 py-5"></section>
        <section className="footer-section-container container">
          <AppFooterSection />
        </section>
      </section>
    </React.Fragment>
  );
};
export default Pricing;
