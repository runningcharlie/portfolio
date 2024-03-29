import { Link } from "react-router-dom";
import "./about.style.scss";

import { ReactComponent as HTMLLogo } from "../../assets/html.svg";
import { ReactComponent as CSSLogo } from "../../assets/css.svg";
import { ReactComponent as JavaScriptLogo } from "../../assets/javascript.svg";
import { ReactComponent as ReactLogo } from "../../assets/react.svg";
import { ReactComponent as SassLogo } from "../../assets/sass.svg";

const About = () => {
  return (
    <>
      <div className="hero-container">
        <span className="github-button">
          <a href="https://github.com/runningcharlie/portfolio">
            View this website on github
          </a>
        </span>
        <div className="heading">
          <span className="heading-main">Hi,</span>
          <span className="heading-main">
            My name is
            <span className="name"> Charlie,</span>
          </span>
          <span className="heading-main">I'm a front-end developer</span>
          <Link className="btn btn-white" to="/contact">
            Let's get in touch!
          </Link>
        </div>
        <div className="tool">
          <div className="tool-title">Tools I Work With</div>
          <div className="tool-item">
            <HTMLLogo className="tool-logo" />
            <CSSLogo className="tool-logo" />
            <JavaScriptLogo className="tool-logo" />
            <div>
              <ReactLogo className="tool-logo" />
              <SassLogo className="tool-logo" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
