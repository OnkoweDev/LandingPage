import React from "react";
import AppHeroImage from "./../assets/hero-image.png";
import { Button } from "react-bootstrap";
import AppHeroWave from "./../assets/hero-wave.svg";
const AppHero = () => {
  return (
    <React.Fragment>
      <div className="container-fluid col-xxl-12 px-4 py-5 brand-primary-bg-color">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-5 m-md-0 m-auto">
            <img
              src={AppHeroImage}
              className="d-block mx-lg-auto img-fluid animate__animated animate__heartBeat"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7 hero-text-section px-md-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-capitalize py-3 brand-white-text fw-bold  animate__animated animate__rubberBand">
              the better way to write
            </h1>
            <p className="lead py-4 text-muted brand-small-text-2 text-start">
              Get your writing smarter and faster with our AI power application
              that enhance your writing. Our powerful tool uses advanced
              algorithms and natural language processing to generate
              high-quality content in seconds, whether you need help with
              creative writing, copywriting, or any other type of writing, our
              AI-powered application has got you covered.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                type="button"
                className="btn-lg brand-custom-button px-4 me-md-2 text-capitalize brand-small-text-2 get-started-button width-toggle animate__animated animate__rubberBand"
              >
                start writing now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <img
          src={AppHeroWave}
          className="w-100 h-100 m-0 p-0"
          alt="hero wave section"
        />
      </section>
    </React.Fragment>
  );
};

export default AppHero;
