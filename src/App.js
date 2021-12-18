import "./App.scss";
import Section from "./components/section";
import "./style/icon-font.css";
import SectionFeature from "./components/feature";
import SectionTours from "./components/tours";
import Header from "./components/header";
import Stories from "./components/stories";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section />
        <SectionFeature />
        <SectionTours />
        <Stories />
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now!</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      required
                      id="name"
                    />
                    <label for="name" className="form__label">
                      Full Name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      required
                      id="email"
                    />
                    <label for="email" className="form__label">
                      Email
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
