import Movie from "./Movie";
import batman from "./img/batman.jpg";
import spiderman from "./img/spiderman.jpg";
import superman from "./img/superman.jpg";
import UserImage from "./UserImage";
import ClassSample from "./ClassSample";
import Person from "./Person";
import Student from "./Student";
import Events from "./Events";
import ReactStates from "./ReactStates";
import ClanskaIskaznica from "./ClanskaIskaznica";
import Acordion from "./Acordion";
import MovieSearch from "./MovieSearch";

function Playground() {
  const students = [
    {
      fullName: "Ivan Horvat",
      average: 4.2,
      passed: ["fizika", "OOP", "TZK"],
      jmbag: 5325325515,
    },
    {
      fullName: "Scipe Mesic",
      average: 3.2,
      passed: ["biologija", "OOP", "TZK", "logika"],
      jmbag: 35135135153,
    },
    {
      fullName: "Ivo Andric",
      average: 2.6,
      passed: ["biologija", "OOP", "filozofija", "logika"],
      jmbag: 24262626236,
    },
  ];

  const introduction = (fullNameString) => {
    alert("Mein Name ist " + fullNameString);
  };

  return (
    <>
      <MovieSearch />
      <h1>Accordions</h1>
      <Acordion />
      <Acordion />

      <ClanskaIskaznica />

      <ReactStates />

      <Events />

      {students.map((student) => {
        return (
          <div key={student.jmbag}>
            <Student
              fullName={student.fullName}
              average={student.average}
              passed={student.passed}
              jmbag={student.jmbag}
              introducePerson={introduction}
            />
          </div>
        );
      })}
      <Person
        name="Franc"
        surname="Bilik"
        birthday={2000}
        adress="Zagreb"
        parties={["HDZ", "SDP", "Mozemo", "Ne mozemo"]}
        introducePerson={introduction}
      />
      <Person
        name="Stipe"
        surname="Mesic"
        birthday={1900}
        adress="Yuga"
        parties={["HNS", "HSLS", "HSS"]}
      />

      {/* <Movie title="Batman" image={batman} />
      <Movie title="Spiderman" image={spiderman} />

      <Movie title="superman" image={superman} /> */}
      <Movie />
      <UserImage />
      <ClassSample />
    </>
  );
}

export default Playground;
