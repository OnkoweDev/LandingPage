import React from "react";
import AppHeader from "./../components/header";
import AltHero from "../components/Alt-hero";
import PricingContainer from "../components/PricingContainer";
import AppPricingCard from "../components/pricing";
import AppFaq from "../components/faq";
import AppFooterSection from "../components/footer";
import PriceCard from "../components/PriceCard";
import '../components/contain.css'

const Pricing = () => {
  return (
    <React.Fragment>
      <section className="w-100" style={{ overflowX: "hidden" }}>
        <AppHeader userCasePage={true} className={"brand-alt-hero-bg-color"}>
          <AltHero heroSectionName={"PRICING"} />
        </AppHeader>

       
          
          <section className="pricing-container container p-md-0 p-4">
          <section className="con">
           
            <PriceCard title='STARTER PLAN' amount='$10' feature1='100k Words' feature2='20 Image Generation' feature3='3hrs Audio Transcription' />

            <PriceCard title='ELITE PLAN' amount='$15' feature1='150k Words' feature2='27 Image Generation' feature3='5hrs Audio Transcription' />

            <PriceCard title='PRO PLAN' amount='$25' feature1='250k Words' feature2='40 Image Generation' feature3='10hrs Audio Transcription' />
            


            

          </section>
        </section>

        
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
