import main from "../assets/images/hero-img.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Assign</span> Application
          </h1>
          <p>
            "Streamline Your Customer Relationships with our CRM App -
            Efficiently Manage Leads, Sales, and Support with Ease" "Streamline
            Your Customer Relationships with our CRM App - Efficiently Manage
            Leads, Sales, and Support with Ease"
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
