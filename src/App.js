import './App.scss';
import Section from './components/section';
import './style/icon-font.css';
import SectionFeature from './components/feature';
import SectionTours from './components/tours';
import Header from './components/header';
import Stories from './components/stories';
import Booking from './components/booking';

import Logo from './img/logo-green-1x.png'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section />
        <SectionFeature />
        <SectionTours />
        <Stories />
        <Booking />
      </main>
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={Logo} alt="Full logo" className="footer__logo" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by 
              <a href="#" className="footer__link">
                Michael Brandt
              </a>
              because me great
              <a href="#" className="footer__link">
                advanced scss &copy;
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
