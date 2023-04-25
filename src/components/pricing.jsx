import React from "react";
import { Button } from "react-bootstrap";
const AppPricingCard = ({cardTitle, children, className, ...others}) => {
  return (
    <React.Fragment>
        <section className={`pricing-card card brand-primary-bg-color m-auto mt-4 d-flex align-items-center justify-content-center flex-column ${className}`} {...others}>
            <h4 className="fs-4 fw-bold brand-white-text text-capitalize text-center my-4">{cardTitle}</h4>
            
            <section>
                {children}
            </section>
            
            <section className="card-button-section my-5 ">
                
                <Button className="brand-custom-button text-capitalize brand-small-text-3 px-5">start writing now</Button>
                
            </section>
        </section>
    </React.Fragment>
  )
}

export default AppPricingCard;
