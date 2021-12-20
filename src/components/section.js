import '../App.scss';

import PicOne from '.././img/comp1.jpg';
import PicTwo from '.././img/comp2.jpg';
import PicThree from '.././img/comp3.jpg';

const Section = () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">exiting tours for adventurous people</h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="btn-text">
          more info &rarr;
        </a>
      </div>{' '}
      <div className="col-1-of-2">
        <div className="composition">
          <img src={PicOne} alt="" className="composition__photo composition__photo--p1" />
          <img src={PicTwo} alt="" className="composition__photo composition__photo--p2" />
          <img src={PicThree} alt="" className="composition__photo composition__photo--p3" />
        </div>
      </div>
    </div>
  </section>
);

export default Section;
