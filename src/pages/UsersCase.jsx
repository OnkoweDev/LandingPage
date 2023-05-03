import React, { useEffect } from "react";
import AppHeader from "../components/header";
import AltHero from "../components/Alt-hero";
import UserCaseContainer from "../components/user-case";
import ProductImg from "./../assets/product.svg";
import LandingPageImg from "./../assets/landing-page.svg";
import AiImg from "./../assets/ai.svg";
import LanguagesImg from "./../assets/languages.svg";
import TranscribeImg from "./../assets/transcribe.svg";
import WritingImg from "./../assets/writing.svg";
import EbookImg from "./../assets/ebook.svg";
import AppFooterSection from "../components/footer";
import { Button } from "react-bootstrap";
import DemoImg1 from "./../assets/demo-1.svg";
import DemoImg2 from "./../assets/demo-2.svg";
import DemoImg3 from "./../assets/demo-3.svg";
import DemoImg4 from "./../assets/demo-4.svg";
import DemoImg5 from "./../assets/demo-5.svg";
import DemoImg6 from "./../assets/demo-3.svg";
import AOS from "aos";
import SocialIconsImg from "./../assets/social-icons.svg";
import AppCommunityCard from "../components/community-card";

const UsersCase = () => {
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
      <section className="w-100" style={{ overflowX: "hidden" }}>
        <AppHeader userCasePage={true} className={"brand-alt-hero-bg-color"}>
          <AltHero heroSectionName={"Use cases"} />
        </AppHeader>
        <section className="usercase-section brand-primary-bg-color m-auto my-2 py-2 row d-flex align-items-center justify-content-around row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <UserCaseContainer
            image={ProductImg}
            headerText={"product description generator"}
            className="mx-1 my-5"
          >
            <p className="px-1 brand-small-text-3 text-muted">
              With so much that has to be done almost at the same time, it could
              be very challenging operating an ecommerce business. One of the
              most important things to be done is to consistently create an
              attention-grabbing description for different products, which could
              be a daunting task. But why should you get stressed over that when
              you could effortlessly get that done by simply using Olukowe’s
              product description generator. The Olukowe Product description
              generator tool comes handy when you need to create excellent and
              highly persuasive product description . By doing as little as
              simply in putting the features of your products, you in a few
              seconds get a description tailored to your needs from which you
              can choose from.
            </p>
          </UserCaseContainer>

          <UserCaseContainer
            image={LandingPageImg}
            headerText={"landing page content generator"}
            className="mx-1 my-5"
          >
            <p className="px-1 brand-small-text-3 text-muted">
              The goal of every marketer is for their marketing campaign to
              convert as many audience as possible, and for their conversion
              goal to the met, a lot of work has to go into campaign. A landing
              page with very good content is one of the most important tools in
              marketing and does it get any easy writing content for landing
              pages? I do not think so. Olukowes landing page content generator
              tool supports marketers create compelling content for landing
              pages in few text and clicks, which one capable of capturing
              {"audiences'"} interests and convert them into customers. All that
              is required by you is to input a brief description of your product
              and leave the brain working to our artificial intelligence.
            </p>
          </UserCaseContainer>

          <UserCaseContainer
            image={LanguagesImg}
            headerText={"Content Translation"}
            className="mx-1 my-5"
            data-aos="slide-up"
            data-aos-duration="1200"
          >
            <section className="px-1 brand-small-text-3 text-muted">
              In a language diversified word, communication barriers continues
              to exist especially for authors who have readers across the globe
              and desire to communicate their thought or stories the same way
              they had with their original language. Some of these problems
              affect both clients and translators, while others can be
              classified as structural problems. since they have an impact on
              translation as a whole. for authors and writers who struggle with
              the language barrier, Olukowe’s content translatotion tool is a
              game-changer, you can easily translate your information between
              the selections of several languages . Thanks to thsi features,
              additionally, you will have the option to switch between language,
              allowing you easily translate your work into any of these
              language.
              <span className="d-block brand-white-text my-3 fw-bold">
                {" "}
                HOW DOES IT FUNCTION?
              </span>
              <ol className="p-0 px-2">
                <li>
                  Enter or load texts you wish to translate Choose the language
                </li>
                <li>
                  choose the language into which you which the text to be
                  translated Our Artificial
                </li>
                <li>
                  Our Artifical Intelligence authomatically translate your text
                  for you.
                </li>
              </ol>
            </section>
          </UserCaseContainer>

          <UserCaseContainer
            image={TranscribeImg}
            headerText={"Audio Transcription"}
            className="mx-1 my-5"
            data-aos="slide-up"
            data-aos-duration="400"
          >
            <section className="px-1 brand-small-text-3 text-muted">
              Educators, public speakers, qualitative data collectors, and
              students are often in need of an all-inclusive tool that can get
              their audios transcribed, translated, edited and maybe published.
              In addition to Olukowe making high quality audio transcription
              from any source possible, it embraces every other service
              mentioned earlier. Just as every other features of Olukowe, it is
              easy to use and in just few clicks you get texts from your audio
              file. All that is required by you are
              <ol className="p-0 px-2 my-3">
                <li>Import the audio file you</li>
                <li>
                  wish to transcribe Load imported file to the transcribe tool
                </li>
                <li>Proceed to transcribe.</li>
              </ol>
            </section>
            <Button className="brand-custom-button text-capitalize brand-small-text-3 px-3 my-3">
              learn more
            </Button>
          </UserCaseContainer>

          <UserCaseContainer
            image={AiImg}
            headerText={"AI Powered Generator"}
            className="mx-1 my-5"
            data-aos="slide-right"
            data-aos-duration="1200"
          >
            <section className="px-1 brand-small-text-3 text-muted">
              It is 21st century and the success of your business rely heavily
              on how successful your social media Ads performance is dependent
              on the strength of the copy. Businesses waste scarce resources by
              writing Ad copies that do not appeal to the target customers and
              in the end{"don't"} convert. If an Ad is doing well, check the Ad
              copy. Our AI powered Ad copy generator is plagiarism-free,
              tailored to meet the exact customers that they are intended to
              reach. Stop giving some so-called expert thousand of dollars to
              write Ads copy for you when you can generate a high conerting Ad
              copy in just one-chick and at the fraction of the price. Whether
              you are running an advert on Facebook, Linkedin, Google or Twitter
              Olowe has got you covered. Our AI Model has been trained across
              many industries and fed with enough data to give you the best Ad
              copies that you will ever need.
              <span className="d-block brand-white-text my-3 fw-bold">
                {" "}
                HOW DOES IT WORK?
              </span>
              Getting started with OLUKOWE is easy like eating a piece of cake;
              <ol className="p-0 px-2">
                <li>
                  Input a one or two sentences about your business and what you
                  would like to post.
                </li>
                <li>
                  Click create and Our AI copy that is tailored to meet your
                  business needs.
                </li>
                <li>
                  You can create as many time as possible, what this means is
                  that, if you want to post up 70 - 50 Ads copy daily, you can
                  have it and even much without worrying about plagiarism or
                  stalled contents.
                </li>
              </ol>
              Olukowe is trusted by thousands of businesses, Advertising
              Agencies, and content creators around the globe.
            </section>
          </UserCaseContainer>

          <UserCaseContainer
            image={WritingImg}
            headerText={"Blog Post And Article Writing Assistance"}
            className="mx-1 my-5"
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
          </UserCaseContainer>

          <UserCaseContainer
            image={SocialIconsImg}
            headerText={"Social Media AI Assisted Powered Writing"}
            className="mx-1 my-5"
            data-aos="flip-left"
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
          </UserCaseContainer>

          <UserCaseContainer
            image={EbookImg}
            headerText={"Ebook Writing And Publishing"}
            className="mx-1 my-5"
            data-aos="flip-right"
            data-aos-duration="1200"
          >
            <p className="px-1 brand-small-text-3 text-muted">
              Thousand of writers, bloggers, and marketers can rapidly create
              100% original books with Olukowe’s Ebook authoring platform and
              additionally, we’ll help you with the book publishing procedure.
              Our AI assistance supports you in further refining and enhancing
              either your blog posts or publications. Since we offer options for
              how you wish to write the book, you can use a variety of methods.
              You can write book using the text editor, additionally, you have
              access to the speech -to-text feature, which uses computational
              linguistics to recognize and translate spoken language into text,
              furthermore, you have the choice of AI assistance, which would
              allow you to switch to AI mode and produce content pertinent to
              your work.
            </p>
          </UserCaseContainer>
        </section>
        <section className="brand-primary-bg-color ">
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
        </section>
        <br />
        <br />
        <section className="my-5 py-5"></section>

        <section className="footer-section-container container">
          <AppFooterSection />
        </section>
      </section>
    </React.Fragment>
  );
};
export default UsersCase;
