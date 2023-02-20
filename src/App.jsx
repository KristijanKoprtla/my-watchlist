import "./App.css";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Footer from "./components/Footer";

import Playground from "./playground/Playground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

export const NotificationContext = createContext(0);

function App() {
  const [notification, setNotification] = useState(false);

  return (
    <Router>
      <div className="App">
        <NotificationContext.Provider value={{notification, setNotification}}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </NotificationContext.Provider>

        <Footer />

        {/* <Playground /> */}
      </div>
    </Router>
  );
}

export default App;
