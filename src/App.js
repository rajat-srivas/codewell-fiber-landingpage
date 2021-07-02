import './App.scss';
import HeroSection from './src/component/hero/hero.component';
import WhyFiber from './src/component/why-fiber/why-fiber.component';
import Portfolio from './src/component/portfolio/portfolio.component';
import Footer from './src/component/footer/footer.component';
import SignUp from './src/component/signup/signup.component';

function App() {
  return (
    <div className="app">
      <div className='hero-section'>
        <HeroSection />
      </div>
      <WhyFiber></WhyFiber>
      <Portfolio></Portfolio>
      <Footer></Footer>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
