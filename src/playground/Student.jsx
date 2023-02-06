const Student = (props) => {
    return (
        <>
            <div>Ime i Prezime: {props.fullName}</div>
            <div>Prosjek: {props.average}</div>
            <div>Polazni kolegiji: {props.passed.join(', ')} </div>
            <div>JMBAG: {props.jmbag}</div>
        </>
    )
}

export default Student;