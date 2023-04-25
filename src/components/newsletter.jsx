import React from "react";
import DemoImg7 from "./../assets/demo-7.svg";
import DemoImg8 from "./../assets/demo-8.svg";
import DemoImg9 from "./../assets/demo-9.svg";
import DemoImg10 from "./../assets/demo-10.svg";
const AppNewsLetter = () => {
  return (
    <React.Fragment>
      <section className="newsletter-section d-flex align-items-center flex-column p-4 width-toggle-2 m-auto mt-5">
        <section className="newsletter-header w-100 my-4 p-3 d-flex align-items-center justify-content-between">
          <img
            src={DemoImg7}
            width={"43"}
            height={"43"}
            className="img-fluid mx-2"
            alt="site demo image"
          />

          <section className="newsletter-text-header d-flex align-items-center justify-content-center flex-column">
            <h5 className="fs-5 fw-bold text-capitalize brand-white-text text-center">
              join our newsletter
            </h5>
            <p className="text-muted brand-small-text-3 text-capitalize text-muted m-0 text-center">
              be the first to get our latest update in your inbox
            </p>
          </section>

          <img
            src={DemoImg8}
            width={"43"}
            height={"43"}
            className="img-fluid mx-2"
            alt="site demo image"
          />
        </section>

        <form className="newsletter-input-section">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control p-3 px-5 newsletter-email-input brand-small-text-3 brand-white-text"
              placeholder="enter your email address"
              aria-label="Recipient's email"
              aria-describedby="basic-addon2"
            />
            <button className="input-group-text brand-custom-button text-capitalize brand-white-text brand-small-text-3 px-4" id="basic-addon2">
             send
            </button>
          </div>
        </form>

        <section className="d-flex w-100 align-items-center justify-content-around my-4">
          <img
            src={DemoImg9}
            width={"43"}
            height={"43"}
            className="img-fluid"
            alt="site demo image"
          />
          <img
            src={DemoImg10}
            width={"43"}
            height={"43"}
            className="img-fluid"
            alt="site demo image"
          />
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppNewsLetter;
