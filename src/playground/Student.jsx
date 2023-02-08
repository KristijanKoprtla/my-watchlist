import propTypes from 'prop-types'; 


const Student = (props) => {
    return (
        <>
            <div>Ime i Prezime: {props.fullName}</div>
            <div>Prosjek: {props.average}</div>
            <div>Polazni kolegiji: {props.passed.join(', ')} </div>
            <div>JMBAG: {props.jmbag}</div>
            <button onClick={() => props.introducePerson(`${props.fullName}`)}>Introduce person</button>
        </>
    )
}

export default Student;

Student.propTypes = {
    fullName: propTypes.string,
    average: propTypes.number,
    passed: propTypes.arrayOf(propTypes.string)
}