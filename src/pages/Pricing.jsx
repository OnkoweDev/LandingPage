import React from "react";
import AppHeader from "./../components/header";

const Pricing = () => {
  return (
    <React.Fragment>
      <section
        className="brand-primary-bg-color"
        style={{ overflowX: "hidden" }}
      >
        <AppHeader pricingPage={true} />
      </section>
    </React.Fragment>
  );
};
export default Pricing;
