import './App.scss';
import Section from './components/section';
import './style/icon-font.css';
import SectionFeature from './components/feature';
import SectionTours from './components/tours';
import Header from './components/header';
import Stories from './components/stories';
import Booking from './components/booking';

import Footer from './components/footer';
import Navigation from './components/navigation';

const App = () => {
  return (
    <body>
      <Navigation />
      <Header />
      <main>
        <Section />
        <SectionFeature />
        <SectionTours />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </body>
  );
};

export default App;
