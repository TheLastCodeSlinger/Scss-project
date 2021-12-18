import Logo from ".././img/logo2.jpg";


const Header = () => (
  <header className="header">
    <div className="header__img-container">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="header__center-container">
      <h1>
        <span className="header-headline--primary">OUTDOORS</span>
        <span className="header-headline--secondary">Enjoy your time</span>
      </h1>
      <button className="button button-animated">Click for more</button>
    </div>
  </header>
);

export default Header
