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
      </main>
    </>
  );
};

export default App;
