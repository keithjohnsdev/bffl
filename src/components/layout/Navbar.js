import "./Navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const business = props.business;
  const howItWorks = props.howItWorks;
  const talent = props.talent;
  const top = props.top;
  const mission = props.mission;
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  function hamburgerToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="Navbar">
      <div className="left">
        <p
          className="nav"
          onClick={()=>{navigate("/contact-brands")}}
        >
          FOR BUSINESS
        </p>
        <p
          className="nav"
          onClick={() =>
            top.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          FOR CREATORS
        </p>
        <p
          className="nav"
          onClick={() =>
            howItWorks.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          HOW IT WORKS
        </p>
      </div>
        <img
          className="center-logo"
          src={require("../../assets/logo-bffl-tag.png")}
          alt="BFFL dog tag logo"
          onClick={() =>
            top.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <div className="center"></div>
      <div className="right">
        <p
          className="nav"
          onClick={() =>
            talent.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          MEET THE TALENT
        </p>
        <p
          className="nav"
          onClick={() =>
            mission.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          OUR MISSION
        </p>
        <p
          className="nav"
          onClick={() =>
            mission.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          LOGIN
        </p>
      </div>
      <div className="hamburger" onClick={hamburgerToggle}>
        <svg
          width="36"
          height="18"
          viewBox="0 0 36 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="1"
            x2="32"
            y2="1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            y1="9"
            x2="32"
            y2="9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            y1="17"
            x2="32"
            y2="17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={showMenu ? "mobile-menu" : "mobile-menu hide"} id="menu">
        <p
          className="nav"
          onClick={() =>
            top.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          FOR BUSINESS
        </p>
        <p
          className="nav"
          onClick={() =>
            top.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          FOR CREATORS
        </p>
        <p
          className="nav"
          onClick={() =>
            howItWorks.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          HOW IT WORKS
        </p>
        <p
          className="nav"
          onClick={() =>
            talent.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          MEET THE TALENT
        </p>
        <p
          className="nav"
          onClick={() =>
            mission.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          OUR MISSION
        </p>
        <p
          className="nav"
          onClick={() =>
            business.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          LOGIN
        </p>
      </div>
    </div>
  );
};
