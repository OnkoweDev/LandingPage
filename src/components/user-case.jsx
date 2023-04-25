import React from "react";

const UserCaseContainer = ({image, headerText, children, className}) => {
  return (
    <React.Fragment>
      <section className={`user-case-container d-flex align-items-start flex-column ${className} p-4 `}>
            <section className="user-case-header d-flex align-items-center justify-content-start w-100 my-3">
                <img src={image} alt="user case image" className="img-fluid mx-2" width="30" height="30"/>
                <h5 className="fs-5 fw-bold text-uppercase text-center m-0 mx-2 brand-white-text">{headerText}</h5>
            </section>
            
            <section className="d-flex align-items-start flex-column">
                {children}
            </section>
      </section>
    </React.Fragment>
  );
}

export default UserCaseContainer
