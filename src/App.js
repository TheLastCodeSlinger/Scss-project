import "./App.scss";
import Section from "./components/section";
import "./style/icon-font.css";
import SectionFeature from "./components/section-feature";
import SectionTours from "./components/section-tours";
import Header from "./components/header";

import Asia from './img/asia1.jpg'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section />
        <SectionFeature />
        <SectionTours />

        <section className="section-stories">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary"></h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img src={Asia} alt="Person" />
              </figure>
              <div className="story_text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
