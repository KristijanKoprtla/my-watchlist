import "./App.css";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Footer from "./components/Footer";

import Playground from "./playground/Playground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          
        </main>

        <Footer />

        {/* <Playground /> */}
      </div>
    </Router>
  );
}

export default App;
