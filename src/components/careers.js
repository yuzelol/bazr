import React, { useEffect } from "react";

import "../styles/careers.css";

import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

const Content = () => {
  return (
    <div>
      <div className="card">
        <div className="heading">Become an international traveller</div>
        <hr />
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras
        ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
        Proin eget tortor risus.
      </div>

      <div className="card">
        <div className="heading">Become your own destiny</div>
        <hr />
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras
        ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
        Proin eget tortor risus.
      </div>

      <div className="card">
        <div className="heading">
          Become what you always wanted to be, financially free
        </div>
        <hr />
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras
        ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
        Proin eget tortor risus.
      </div>
    </div>
  );
};

const Info = () => {
    return (
        <div id="info-container">
            <div>◼ &nbsp; £60,000 per annum</div>
            <div>◼ &nbsp; Fully expenses paid travel to exotic holiday destinations</div>
            <div>◼ &nbsp; Fully expenses paid healthcare and dental plan</div>
            <div>◼ &nbsp; Become the source of all Holy things</div>
        </div>
    )
}

const Careers = ({basket}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const data = {
    type:   'Careers',
    header: "Travel the Silk Road...",
    content: Content(),
    info: Info(),
    button: true,
    buttonText: "Apply for this position",
  };

  return (
    <div>
      <Header basket={basket} />
      <Body data={data} />
      <Footer />
    </div>
  );
};

export default Careers;
