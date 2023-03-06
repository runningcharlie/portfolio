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
      <div class="hero-container">
        <div class="heading">
          <span class="heading-main">Hi,</span>
          <span class="heading-main">
            My name is
            <span class="name"> Charlie,</span>
          </span>
          <span class="heading-main">I'm a front-end developer</span>
          <Link class="btn btn-white" to="/contact">
            Let's get in touch!
          </Link>
        </div>
        <div class="tool">
          <div class="tool-title">Tools I Work With</div>
          <div class="tool-item">
            <HTMLLogo className="tool-logo" />
            <CSSLogo className="tool-logo" />
            <JavaScriptLogo className="tool-logo" />
            <div>
              <ReactLogo className="tool-logo" />
              <SassLogo className="tool-logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
