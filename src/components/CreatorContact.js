import { NavbarSimple } from "./layout/NavbarSimple";
import { Footer } from "./layout/Footer";
import { TextInput } from "./TextInput";
import { CountrySelectInput } from "./CountrySelectInput";
import "../App.scss";
import "./BrandContact.scss";
import { useRef, useState } from "react";

const CreatorContact = () => {
  const top = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    tiktok: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // function handleCheck(e) {
  //   const value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //   setFormData((formData) => ({
  //     ...formData,
  //     [e.target.name]: value,
  //   }));
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    window.open(
      `mailto:bark@bffl.io?subject=I'm interested in joining BFFL as a creator!&body=Full Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0APhone Number: ${formData.phone}%0D%0AWebsite: ${formData.website}%0D%0AInstagram: ${formData.instagram}%0D%0ATikTok: ${formData.tiktok}%0D%0A----%0D%0A${formData.message}`
    );
  }
  return (
    <>
      <NavbarSimple />
      <section className="contact-page" ref={top}>
        <h3 className="section-title">Creator Contact</h3>
        <form>
          <div className="form-row">
            <TextInput
              label="Full Name"
              placeholder="Enter Your Full Name"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
            />
            <TextInput
              label="Website (optional)"
              placeholder="Enter Website URL "
              type="text"
              value={formData.website}
              onChange={handleChange}
              name="website"
            />
            <TextInput
              label="Email"
              placeholder="Enter Business Email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <TextInput
              label="Phone Number"
              placeholder="Enter Business Phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
            <TextInput
              label="Instagram (optional)"
              placeholder="Enter Instagram Profile URL"
              type="text"
              value={formData.instagram}
              onChange={handleChange}
              name="instagram"
            />
            <TextInput
              label="TikTok (optional)"
              placeholder="Enter TikTok Profile URL"
              type="text"
              value={formData.tiktok}
              onChange={handleChange}
              name="tiktok"
            />
          </div>
          <div className="form-row message">
            <label hmtlfor="message">Message</label>
            <textarea
              className="contact-message"
              placeholder="Enter a reason you want to sign up as a brand..."
              value={formData.message}
              onChange={handleChange}
              name="message"
              id="message"
              rows={6}
            />
          </div>
          <div className="form-row align-right">
            <button className="submit-btn" onClick={handleSubmit}>
              SEND
            </button>
          </div>
        </form>
      </section>
      <Footer top={top} />
    </>
  );
};

export default CreatorContact;
