import React from "react";

const PricingContainer = ({className, children}) => {
  return (
    <React.Fragment>
      <section className={`container ${className} shadow rounded-3`}>
        {children}
      </section>
    </React.Fragment>
  );
};

export default PricingContainer;
