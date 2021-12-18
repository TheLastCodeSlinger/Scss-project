import VideoOne from ".././img/video.mp4";
import VideoTwo from ".././img/video.webm";

import Asia from ".././img/nat-9.jpg";
import Person from ".././img/nat-8.jpg";

const Stories = () => (
  <section className="section-stories">
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={VideoOne} type="video/mp4" />
        <source src={VideoTwo} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">We make people genuinely happy!</h2>
    </div>

    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={Asia} alt="Person" className="story__img" />
          <figcaption className="story__caption">Asia Girl</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={Person} alt="Person" className="story__img" />
          <figcaption className="story__caption">Asia Girl</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation
          </p>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-big">
      <button className="button button-green"> More stories &rarr;</button>
    </div>
  </section>
);

export default Stories;
