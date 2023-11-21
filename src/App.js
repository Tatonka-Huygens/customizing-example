import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Promo heading="Don't miss this deal!" promoSubHeading="Subscribe to my newsletter and get all the shop items at 50% off!"/>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;

