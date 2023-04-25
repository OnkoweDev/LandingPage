import React from "react";
import { Accordion } from "react-bootstrap";
const AppFaq = ({eventKey, accordionHeader, children, className}) => {
  return (
    <React.Fragment>
      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion brand-primary-bg-color ${className}mt-3 my-4 `}
        
      >
        <Accordion.Item
          eventKey={eventKey}
          className="brand-primary-bg-color"
          
        >
          <Accordion.Header className="">
            {accordionHeader}
          </Accordion.Header>

          <Accordion.Body className="">{children}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
}

export default AppFaq;
