const Booking = () => (
  <section className="section-book">
    <div className="row">
      <div className="book">
        <div className="book__form">
          <form action="#" className="form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start booking now!</h2>
            </div>
            <div className="form__group">
              <input type="text" className="form__input" placeholder="Full Name" required id="name" />
              <label for="name" className="form__label">
                Full Name
              </label>
            </div>
            <div className="form__group">
              <input type="email" className="form__input" placeholder="Email address" required id="email" />
              <label for="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group">
              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="small" name="size" />
                <label for="small" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Small tour group
                </label>
              </div>
              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="large" name="size" />
                <label for="large" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>
            <div className="form__group u-margin-top-medium">
              <button className="button button-green">Next step</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Booking;
