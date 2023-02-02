import logo from "./logo.svg";
import "./App.css";
import UserImage from "./playground/UserImage";
import ClassSample from "./playground/ClassSample";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Person from "./playground/Person";
import Movie from "./playground/Movie";
import batman from './playground/img/batman.jpg'
import spiderman from './playground/img/spiderman.jpg'
import superman from './playground/img/superman.jpg'




function App() {
  return (
    <div className="App">
      {/* <Header />
      <hr />
      <Main />
      <hr />
      <Footer /> */}

      {/* PLAYGROUND */}

      {/* <UserImage />
      <ClassSample /> */}

      <Movie
        title="Batman"
        image={batman}
      />
      <Movie
        title="Spiderman"
        image={spiderman}
      />
         
      <Movie
        title="superman"
        image={superman}
      />

      {/* <Person
        name="Franc"
        surname="Bilik"
        birthday={2000}
        adress="Zagreb"
        parties={["HDZ", "SDP", "Mozemo", "Ne mozemo"]}
      />
      <Person
        name="Stipe"
        surname="Mesic"
        birthday={1900}
        adress="Yuga"
        parties={["HNS", "HSLS", "HSS"]}
      /> */}
    </div>
  );
}

export default App;
