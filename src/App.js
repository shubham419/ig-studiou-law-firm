import './App.css';
import AreaOfPractices from './components/AreaOfPractice/AreaOfPractices';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import IntroSection from './components/IntroSection/IntroSection';
import NewsLetter from './components/NewsLetter/NewsLetter';
import OurTeamSection from './components/OurTeamSection/OurTeamSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSection';
import Header from './components/header/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <WhyUsSection />
      <AreaOfPractices />
      <OurTeamSection />
      <FaqSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
