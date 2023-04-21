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
  const mission = useRef(null);
  const hello = useRef(null);

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
            <button className="blue-outline-btn">JOIN AS A CREATOR</button>
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
              <button className="blue-outline-btn black">
                JOIN AS A BRAND
              </button>
              <button className="solid-btn">JOIN AS A CREATOR</button>
            </div>
          </div>
          <div className="hello-img">
            <img />
          </div>
        </div>
      </section>
      <section className="footer">
        {!isMobile ? (
          <div className="footer-content">
            <div className="left">
              <div
                className="logo-div"
                onClick={() =>
                  top.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <img
                  src={require("./assets/logo-bffl-tag-outline.png")}
                  alt="BFFL logo dogtag in white"
                />
              </div>
              <div className="vr" />
              <div className="links">
                <a
                  href={() =>
                    window.open(
                      "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                    )
                  }
                >
                  HELLO@BFFL.IO
                </a>
                <a>PRIVACY POLICY</a>
                <a>TERMS OF SERVICE</a>
              </div>
            </div>
            <div className="right">
              <div className="socials">
                <div className="svg-div">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="30"
                    height="26"
                    viewBox="0 0 30 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.4377 25.1874C20.7557 25.1874 26.9479 15.8083 26.9479 7.67727C26.9479 7.41359 26.942 7.14406 26.9303 6.88039C28.1348 6.00927 29.1744 4.93026 30 3.69406C28.8782 4.19319 27.6871 4.51917 26.4674 4.66086C27.7516 3.89107 28.7132 2.68178 29.1738 1.25715C27.9657 1.97314 26.6445 2.4782 25.2668 2.7507C24.3385 1.76439 23.1112 1.11133 21.7746 0.892503C20.438 0.673671 19.0665 0.901252 17.8722 1.54006C16.6779 2.17887 15.7273 3.19332 15.1673 4.42658C14.6074 5.65984 14.4693 7.04321 14.7744 8.36281C12.3281 8.24005 9.93492 7.60457 7.74998 6.49756C5.56503 5.39055 3.63712 3.83674 2.09121 1.93684C1.3055 3.29149 1.06507 4.8945 1.41879 6.42005C1.77251 7.94561 2.69383 9.27925 3.99551 10.1499C3.01829 10.1189 2.06247 9.85579 1.20703 9.38234V9.45852C1.20616 10.8801 1.69762 12.2582 2.59789 13.3584C3.49815 14.4586 4.75165 15.2131 6.14531 15.4937C5.24007 15.7414 4.28998 15.7774 3.36855 15.5991C3.76182 16.8217 4.52697 17.8911 5.55721 18.6579C6.58746 19.4247 7.8314 19.8507 9.11543 19.8765C6.93553 21.5888 4.24272 22.5176 1.4707 22.5132C0.979109 22.5125 0.487999 22.4823 0 22.423C2.81607 24.2296 6.09191 25.1892 9.4377 25.1874Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8106 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z"
                      fill="white"
                    />
                    <path
                      d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z"
                      fill="white"
                    />
                    <path
                      d="M24.8086 6.99024C24.8086 7.98633 24 8.78907 23.0098 8.78907C22.0137 8.78907 21.2109 7.98047 21.2109 6.99024C21.2109 5.99414 22.0195 5.19141 23.0098 5.19141C24 5.19141 24.8086 6 24.8086 6.99024Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="27"
                    height="30"
                    viewBox="0 0 27 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3407 0H14.2848V20.4347C14.2848 22.8696 12.3402 24.8696 9.92033 24.8696C7.50042 24.8696 5.55586 22.8696 5.55586 20.4347C5.55586 18.0435 7.45721 16.0869 9.79072 16V10.8696C4.6484 10.9565 0.5 15.1739 0.5 20.4347C0.5 25.7392 4.73482 30 9.96356 30C15.1922 30 19.427 25.6957 19.427 20.4347V9.9565C21.3284 11.3478 23.6619 12.1739 26.125 12.2174V7.08696C22.3223 6.95652 19.3407 3.82608 19.3407 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.7012 5C29.7012 5 29.4082 2.93164 28.5059 2.02344C27.3633 0.828125 26.0859 0.822265 25.5 0.751953C21.3047 0.447265 15.0059 0.447266 15.0059 0.447266H14.9941C14.9941 0.447266 8.69531 0.447265 4.5 0.751953C3.91406 0.822265 2.63672 0.828125 1.49414 2.02344C0.591797 2.93164 0.304688 5 0.304688 5C0.304688 5 0 7.43164 0 9.85742V12.1309C0 14.5566 0.298828 16.9883 0.298828 16.9883C0.298828 16.9883 0.591797 19.0566 1.48828 19.9648C2.63086 21.1602 4.13086 21.1191 4.79883 21.248C7.20117 21.4766 15 21.5469 15 21.5469C15 21.5469 21.3047 21.5352 25.5 21.2363C26.0859 21.166 27.3633 21.1602 28.5059 19.9648C29.4082 19.0566 29.7012 16.9883 29.7012 16.9883C29.7012 16.9883 30 14.5625 30 12.1309V9.85742C30 7.43164 29.7012 5 29.7012 5ZM11.9004 14.8906V6.45898L20.0039 10.6895L11.9004 14.8906Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="footer-content mobile">
            <div className="top">
              <div className="left">
                <div
                  className="logo-div"
                  onClick={() =>
                    top.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <img
                    src={require("./assets/logo-bffl-tag-outline.png")}
                    alt="BFFL logo dogtag in white"
                  />
                </div>
              </div>
              <div className="right">
                <div className="links">
                  <a
                    href={() =>
                      window.open(
                        "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                      )
                    }
                  >
                    HELLO@BFFL.IO
                  </a>
                  <a>PRIVACY POLICY</a>
                  <a>TERMS OF SERVICE</a>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="socials">
                <div className="svg-div">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="30"
                    height="26"
                    viewBox="0 0 30 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.4377 25.1874C20.7557 25.1874 26.9479 15.8083 26.9479 7.67727C26.9479 7.41359 26.942 7.14406 26.9303 6.88039C28.1348 6.00927 29.1744 4.93026 30 3.69406C28.8782 4.19319 27.6871 4.51917 26.4674 4.66086C27.7516 3.89107 28.7132 2.68178 29.1738 1.25715C27.9657 1.97314 26.6445 2.4782 25.2668 2.7507C24.3385 1.76439 23.1112 1.11133 21.7746 0.892503C20.438 0.673671 19.0665 0.901252 17.8722 1.54006C16.6779 2.17887 15.7273 3.19332 15.1673 4.42658C14.6074 5.65984 14.4693 7.04321 14.7744 8.36281C12.3281 8.24005 9.93492 7.60457 7.74998 6.49756C5.56503 5.39055 3.63712 3.83674 2.09121 1.93684C1.3055 3.29149 1.06507 4.8945 1.41879 6.42005C1.77251 7.94561 2.69383 9.27925 3.99551 10.1499C3.01829 10.1189 2.06247 9.85579 1.20703 9.38234V9.45852C1.20616 10.8801 1.69762 12.2582 2.59789 13.3584C3.49815 14.4586 4.75165 15.2131 6.14531 15.4937C5.24007 15.7414 4.28998 15.7774 3.36855 15.5991C3.76182 16.8217 4.52697 17.8911 5.55721 18.6579C6.58746 19.4247 7.8314 19.8507 9.11543 19.8765C6.93553 21.5888 4.24272 22.5176 1.4707 22.5132C0.979109 22.5125 0.487999 22.4823 0 22.423C2.81607 24.2296 6.09191 25.1892 9.4377 25.1874Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8106 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z"
                      fill="white"
                    />
                    <path
                      d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z"
                      fill="white"
                    />
                    <path
                      d="M24.8086 6.99024C24.8086 7.98633 24 8.78907 23.0098 8.78907C22.0137 8.78907 21.2109 7.98047 21.2109 6.99024C21.2109 5.99414 22.0195 5.19141 23.0098 5.19141C24 5.19141 24.8086 6 24.8086 6.99024Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="27"
                    height="30"
                    viewBox="0 0 27 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3407 0H14.2848V20.4347C14.2848 22.8696 12.3402 24.8696 9.92033 24.8696C7.50042 24.8696 5.55586 22.8696 5.55586 20.4347C5.55586 18.0435 7.45721 16.0869 9.79072 16V10.8696C4.6484 10.9565 0.5 15.1739 0.5 20.4347C0.5 25.7392 4.73482 30 9.96356 30C15.1922 30 19.427 25.6957 19.427 20.4347V9.9565C21.3284 11.3478 23.6619 12.1739 26.125 12.2174V7.08696C22.3223 6.95652 19.3407 3.82608 19.3407 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="svg-div">
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.7012 5C29.7012 5 29.4082 2.93164 28.5059 2.02344C27.3633 0.828125 26.0859 0.822265 25.5 0.751953C21.3047 0.447265 15.0059 0.447266 15.0059 0.447266H14.9941C14.9941 0.447266 8.69531 0.447265 4.5 0.751953C3.91406 0.822265 2.63672 0.828125 1.49414 2.02344C0.591797 2.93164 0.304688 5 0.304688 5C0.304688 5 0 7.43164 0 9.85742V12.1309C0 14.5566 0.298828 16.9883 0.298828 16.9883C0.298828 16.9883 0.591797 19.0566 1.48828 19.9648C2.63086 21.1602 4.13086 21.1191 4.79883 21.248C7.20117 21.4766 15 21.5469 15 21.5469C15 21.5469 21.3047 21.5352 25.5 21.2363C26.0859 21.166 27.3633 21.1602 28.5059 19.9648C29.4082 19.0566 29.7012 16.9883 29.7012 16.9883C29.7012 16.9883 30 14.5625 30 12.1309V9.85742C30 7.43164 29.7012 5 29.7012 5ZM11.9004 14.8906V6.45898L20.0039 10.6895L11.9004 14.8906Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
