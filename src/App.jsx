import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tournaments from './components/Tournaments';
import Talks from './components/Talks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tournaments />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
