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
import PriceCard from "../components/PriceCard";
import '../components/contain.css'
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
      comment: "As a Blogger, Olukowe has helped me create some amazing write up",
    },

    {
      id: 6,
      name: "James",
      job: "technical writer",
      rating: 4.9,
      image: DemoImg6,
      comment: "Olukowe has helped me create wonderfull and amazing content on all my post",
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
              className="px-1 jus   brand-small-text-3 text-white-100 text-muted"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Thousands of writers, bloggers, and marketers can rapidly create 100% original books with Olukowe’s Ebook authoring platform. This innovative platform is designed to simplify the book creation process, allowing users to produce high-quality content quickly and efficiently.
              <br /> <br />
              In addition to the authoring capabilities, Olukowe’s platform also provides comprehensive support with the book publishing procedure. Whether you are a first-time author or an experienced writer, our platform offers the tools and resources you need to navigate the publishing landscape successfully.
              <br /> <br />
              One of the standout features of Olukowe’s platform is its AI assistance. Our advanced AI technology aids in further refining and enhancing your content, whether it's blog posts or full-length publications. The AI can suggest improvements, correct errors, and ensure that your writing is polished and professional.
              <br /> <br />
              Moreover, Olukowe’s platform offers various options for how you wish to write your book. You can choose from different writing methods and tools, tailored to fit your unique style and workflow. Whether you prefer to write from scratch, use templates, or dictate your content, our platform accommodates your needs, making the writing process as seamless as possible.

               Olukowe’s Ebook authoring platform empowers writers, bloggers, and marketers to create original content with ease. With robust AI assistance and comprehensive publishing support, our platform ensures that your writing projects are not only completed efficiently but also meet the highest standards of quality
            </p>
          </AppSubHeroSection>

          <AppSubHeroSection
            headerText="Finally, Writing is no longer a challenging task."
            subHeroImage={GirlWithLaptopImg}
          >
            <p
              className="px-1 jus py-8 brand-small-text-3 text-muted"
              data-aos="zoom-in"
              data-aos-duration="1000"

            >
              Working with a team makes work easier and significantly accelerates project completion. If you want to delegate parts of a project to different team members and have them work on their tasks concurrently, Olukowe is the perfect solution. Our platform supports seamless team collaboration, allowing multiple users to work on the same project in real-time, regardless of their physical location.
                <br /> <br />
              With Olukowe, you can efficiently assign specific tasks to various team members, ensuring that each part of the project is handled by the right person. This collaborative approach not only speeds up the project timeline but also leverages the diverse skills and expertise of your team, leading to a more comprehensive and high-quality outcome.
              <br /> <br />
              Moreover, Olukowe facilitates continuous evaluation and feedback. Your team can review and provide input on each other's work as it progresses, enabling a dynamic and interactive development process. This constant feedback loop helps identify potential issues early, ensuring that the final product meets or exceeds expectations.

              The platform's real-time capabilities eliminate the need for physical meetings, breaking down geographical barriers and enabling effective remote collaboration. This flexibility is particularly beneficial in today's globalized and often remote-working environment, where team members may be scattered across different locations and time zones.
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
          <section className="con">
            {/* <AppPricingCard
              cardTitle="STARTER PLAN ($10)"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <section className="my-5 py-5">
                
                <div className="text-white text-center font-bold uppercase">
                  <p>100k Words</p>
                  <p>20 Image Generation</p>
                  <p>3hrs Audio Transcription</p>
                </div>
                <hr className="" />
               
              </section>
            </AppPricingCard> */}
            {/* <AppPricingCard
              cardTitle="ELITE PLAN ($15)"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <section className="my-5 py-5">
                <div className="text-white text-center font-bold uppercase">
                    <p>100k Words</p>
                    <p>20 Image Generation</p>
                    <p>3hrs Audio Transcription</p>
                  </div>
              </section>
            </AppPricingCard>

            <AppPricingCard
              cardTitle="PROFESSIONAL PLAN ($25)"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <section className="my-5 py-5">
                 <div className="text-white text-center font-bold uppercase">
                    <p>100k Words</p>
                    <p>20 Image Generation</p>
                    <p>3hrs Audio Transcription</p>
                  </div>
              </section>
            </AppPricingCard> */}
            <PriceCard 
              data-aos="flip-right"
              data-aos-duration="1000" 
              title='STARTER PLAN' 
              amount='$10' 
              feature1='100k Words' 
              feature2='20 Image Generation' 
              feature3='3hrs Audio Transcription' />

            <PriceCard 
              data-aos="flip-right"
              data-aos-duration="1000" 
              title='ELITE PLAN' 
              amount='$15' 
              feature1='150k Words' 
              feature2='27 Image Generation' 
              feature3='5hrs Audio Transcription' />

            <PriceCard 
              data-aos="flip-right"
              data-aos-duration="1000"  
              title='PRO PLAN' 
              amount='$25' feature1='250k Words' 
              feature2='40 Image Generation' 
              feature3='10hrs Audio Transcription' />
            


            

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
          >You can share your writing with as many people as you want</AppFaq>

          <AppFaq
            eventKey={"1"}
            accordionHeader={
              "If I subscribe to a monthly plan, will I be charged automatically next month?"
            }
          >Yes, our subscription is set to auto-renew by default. However, you can disable auto-renewal at any time.</AppFaq>
          <AppFaq
            eventKey={"2"}
            accordionHeader={
              "How is the pricing of Olukowe compare with Jasper?"
            }
          >Our pricing is competitive compared to many other competitors in the market.</AppFaq>
          <AppFaq
            eventKey={"3"}
            accordionHeader={"Can I translate with Olukowe?"}
          >Yes, you can translate into more than 20 languages, and we are continuously adding more</AppFaq>

          <AppFaq
            eventKey={"4"}
            accordionHeader={"How does your pricing work?"}
          >Our pricing operates on a subscription model.</AppFaq>
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
