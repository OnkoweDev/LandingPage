import React from "react";

const AltHero = ({ heroSectionName }) => {
  return (
    <React.Fragment>
      <section className="alt-hero  py-5 my-5">
        <h1 className="display-6 fw-bold text-center text-capitalize brand-white-text py-4 my-4">
          {heroSectionName && heroSectionName}
        </h1>
        <section className="empty-section mt-3 py-4 "></section>
      </section>
    </React.Fragment>
  );
};

export default AltHero;
