import "./App.scss";
import { Navbar, SectionHeader, SectionDivider } from "./components";
import { useRef, useState, useEffect } from "react";
import { useViewport } from "./components/hooks/useViewport";

function App() {
  const { width } = useViewport();
  const [isMobile, setIsMobile] = useState(false);
  const howItWorks = useRef(null);
  const top = useRef(null);
  const talent = useRef(null);

  useEffect(() => {
    if (width < 601) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="App" ref={top}>
      <Navbar top={top} howItWorks={howItWorks} talent={talent} />
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
          <button className="blue-outline-btn">JOIN AS A BRAND</button>
          <button className="blue-green-btn">JOIN AS A CREATOR</button>
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
            <img src={require("./assets/phones-img.png")} alt="phones showing the BFFL app"/>
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
      </section>
    </div>
  );
}

export default App;
