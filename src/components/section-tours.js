const SectionTours = () => (
  <section className="section-tours">
    <div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-1"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  heading AWESOME
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day tours</li>
                  <li>up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>sleep in cozy hotels</li>
                  <li>difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box u-margin-bottom-big">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">299$</p>
                </div>
                <button className="button">Book now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-2"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  heading AWESOME
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day tours</li>
                  <li>up to 40 people</li>
                  <li>3 tour guides</li>
                  <li>sleep in cozy hotels</li>
                  <li>difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box u-margin-bottom-big">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">499$</p>
                </div>
                <button className="button">Book now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture-3"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  heading AWESOME
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day tours</li>
                  <li>up to 40 people</li>
                  <li>3 tour guides</li>
                  <li>sleep in cozy hotels</li>
                  <li>difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box u-margin-bottom-big">
                  <p className="card__price-only">only</p>
                  <p className="card__price-value">799$</p>
                </div>
                <button className="button">Book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-big">
        <button className="button button-green">Discover all tours</button>
      </div>
    </div>
  </section>
);

export default SectionTours;
