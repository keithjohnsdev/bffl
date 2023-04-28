import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

export const NavbarSimple = (props) => {

  const navigate = useNavigate();
  return (
    <div className="Navbar simple">
        <img
          className="center-logo"
          src={require("../../assets/logo-bffl-tag.png")}
          alt="BFFL dog tag logo"
          onClick={() =>
            navigate("/")
          }
        />
    </div>
  );
};
