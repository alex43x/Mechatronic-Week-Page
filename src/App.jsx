import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionWave from './components/SectionWave';
import About from './components/About';
import Tournaments from './components/Tournaments';
import Talks from './components/Talks';
import Footer from './components/Footer';
import GlobalUI from './components/GlobalUI';
import './App.css';

function App() {
  return (
    <>
      <GlobalUI />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <SectionWave from="var(--dark)" to="var(--light)" />
        <About />
        <SectionWave from="var(--light)" to="var(--white)" />
        <Tournaments />
        <SectionWave from="var(--white)" to="var(--light)" />
        <Talks />
      </main>
      <Footer />
    </>
  );
}

export default App;
