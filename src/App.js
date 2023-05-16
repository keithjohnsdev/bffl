import "./App.scss";
import { Navbar, SectionHeader, SectionDivider, Footer } from "./components";
import { useRef, useState, useEffect } from "react";
import { useViewport } from "./components/hooks/useViewport";
import { useNavigate } from "react-router-dom";

function App() {
  const { width } = useViewport();
  const [isMobile, setIsMobile] = useState(false);
  const howItWorks = useRef(null);
  const top = useRef(null);
  const talent = useRef(null);
  const mission = useRef(null);
  const hello = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (width < 601) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="App" ref={top}>
      <Navbar
        top={top}
        howItWorks={howItWorks}
        talent={talent}
        mission={mission}
        hello={hello}
      />
      <section className="hero">
        <h3 className="section-title">Invite-Only Platform Connecting</h3>
        {isMobile ? (
          <SectionHeader
            textLine1="BRANDS &"
            textLine2="FURRY"
            textLine3="FRIENDS"
          ></SectionHeader>
        ) : (
          <SectionHeader
            textLine1="BRANDS &"
            textLine2="FURRY FRIENDS"
          ></SectionHeader>
        )}
        <p className="italic">Social Collaboration Made Easy!</p>
        <div className="hero-buttons">
          <button className="blue-outline-btn" onClick={()=>{navigate("/contact-brands")}}>JOIN AS A BRAND</button>
          <button className="blue-outline-btn right" onClick={()=>{navigate("/contact-creators")}}>JOIN AS A CREATOR</button>
        </div>
      </section>
      <SectionDivider title="HOW IT WORKS" />
      <section className="how-it-works" ref={howItWorks}>
        <div className="content">
          <div className="text-content">
            <div className="text-div">
              <h4 className="text-title">WORLD-CLASS PET TALENT</h4>
              <p className="text-copy">
                Connect with top pet video creators on TikTok & Instagram for
                your brand.
              </p>
            </div>
            <div className="text-div">
              <h4 className="text-title">AUTOMATED PAYMENTS</h4>
              <p className="text-copy">
                BFFL makes payments easy with Stripe so collaborators can focus
                on quality content.
              </p>
            </div>
            <div className="text-div">
              <h4 className="text-title">COLLAB AT SCALE</h4>
              <p className="text-copy">
                BFFL makes collaboration campaigns easy through group challenges
                & 1:1 opportunities.
              </p>
            </div>
          </div>
          <div className="img-content">
            <img
              src={require("./assets/phones-img.png")}
              alt="phones showing the BFFL app"
            />
          </div>
        </div>
      </section>
      <SectionDivider title="WAG MORE, BARK LESS" />
      <section className="talent" ref={talent}>
        {isMobile ? (
          <SectionHeader
            textLine1="FUR REAL,"
            textLine2="OUR PETS"
            textLine3="ARE THE BEST!"
          ></SectionHeader>
        ) : (
          <SectionHeader
            textLine1="FUR REAL, OUR PETS"
            textLine2="ARE THE BEST!"
          ></SectionHeader>
        )}

        <div className="grid-container">
          <div className="row row1">
            <img
              src={require("./assets/grid-images/grid-img1.png")}
              alt="black white and orange cat being pet"
            />
            <img
              src={require("./assets/grid-images/grid-img2.png")}
              alt="beige ferret standing on a phone"
            />
            {!isMobile && (
              <img
                src={require("./assets/grid-images/grid-img3.png")}
                alt="dog with sunglasses holding a tennis ball in its mouth"
              />
            )}
          </div>
          <div className="row row2">
            {isMobile && (
              <img
                src={require("./assets/grid-images/grid-img3.png")}
                alt="dog with sunglasses holding a tennis ball in its mouth"
              />
            )}
            <img
              src={require("./assets/grid-images/grid-img4.png")}
              alt="dog with donut on its head"
            />
            {!isMobile && (
              <img
                src={require("./assets/grid-images/grid-img5.png")}
                alt="shaggy black dog with its tongue out"
              />
            )}
            {!isMobile && (
              <img
                src={require("./assets/grid-images/grid-img6.png")}
                alt="yellow and green macaw parrot looking at the camera"
              />
            )}
            {!isMobile && (
              <img
                src={require("./assets/grid-images/grid-img7.png")}
                alt="cat with sunglasses on"
              />
            )}
          </div>
          <div className="row row3">
            {/* {isMobile && (
              <img
                src={require("./assets/grid-images/grid-img5.png")}
                alt="shaggy black dog with its tongue out"
              />
            )} */}
            {isMobile && (
              <img
                src={require("./assets/grid-images/grid-img6.png")}
                alt="yellow and green macaw parrot looking at the camera"
              />
            )}
            {isMobile && (
              <img
                src={require("./assets/grid-images/grid-img7.png")}
                alt="cat with sunglasses on"
              />
            )}
            {!isMobile && (
              <img
                src={require("./assets/grid-images/grid-img8.png")}
                alt="iguana on a woman's shoulder"
              />
            )}
            {!isMobile && (
              <img
                src={require("./assets/grid-images/grid-img9.png")}
                alt="dog sitting up holding its paws together"
              />
            )}
          </div>
          {isMobile && (
            <div className="row row4">
              <img
                src={require("./assets/grid-images/grid-img8.png")}
                alt="iguana on a woman's shoulder"
              />
              <img
                src={require("./assets/grid-images/grid-img9.png")}
                alt="dog sitting up holding its paws together"
              />
            </div>
          )}
        </div>
      </section>
      <SectionDivider title="OUR MISSION" />
      <section className="mission" ref={mission}>
        <div className="mission-content">
          <div className="mission-text">
            <h4 className="text-title">LIKES & TREATS</h4>
            <p className="text-copy">
              BFFL creates opportunities for content creators and their beloved
              best friends to connect with their community while earning income.
            </p>
            <button className="blue-outline-btn" onClick={()=>{navigate("/contact-creators")}}>JOIN AS A CREATOR</button>
          </div>
          <div className="mission-img">
            <img
              src={require("./assets/mission-dog-img.png")}
              alt="brown and white dog on a couch looking at the camera"
            />
          </div>
        </div>
      </section>
      <section className="hello" ref={hello}>
        <div className="hello-content">
          <div className="hello-text">
            <h4 className="title">SAY HELLO!</h4>
            <p className="copy">
              Get in touch with us - <br /> we're all ears (and paws)!
            </p>
            <div className="button-div">
              <button className="blue-outline-btn black" onClick={()=>{navigate("/contact-brands")}}>
                JOIN AS A BRAND
              </button>
              <button className="blue-outline-btn black" onClick={()=>{navigate("/contact-creators")}}>JOIN AS A CREATOR</button>
            </div>
          </div>
        </div>
      </section>
      <Footer top={top}/>
    </div>
  );
}

export default App;
