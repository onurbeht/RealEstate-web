
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";

import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <div className="blur"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Started />
      <Footer />
    </div>

  );
}

export default App;
