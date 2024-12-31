import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollTop';
import Education from './Components/Education';
import Main from './Components/Navbar';
import Project from './Components/Project';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
