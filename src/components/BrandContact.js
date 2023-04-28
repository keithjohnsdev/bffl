import { NavbarSimple } from "./layout/NavbarSimple";
import { Footer } from "./layout/Footer";
import "../App.scss";
import "./BrandContact.scss";
import { useRef } from "react";

const BrandContact = () => {
  const top = useRef();
  return (
    <>
      <NavbarSimple/>
      <section className="contact-page" ref={top}>
      <h3 className="section-title">Brand Contact</h3>
      </section>
      <Footer top={top} />
    </>
  );
};

export default BrandContact;
