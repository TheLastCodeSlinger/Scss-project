import PicOne from '.././img/nat-8.jpg';
import PicTwo from '.././img/nat-9.jpg';

const Popup = () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src={PicOne} alt="Tour" className="popup__img" />
        <img src={PicTwo} alt="Tour" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">Accept terms blablabla</h3>
        <p className="popup__text u-margin-bottom-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button button-green">Book now</button>
      </div>
    </div>
  </div>
);

export default Popup;
