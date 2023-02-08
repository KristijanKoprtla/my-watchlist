const Person = (props) => {
    console.log(props);

    return (
        <>
            <div>
                My name is {props.name}
            </div>
            <div>
                My surname is {props.surname}
            </div>
            <div>
                Adress:  {props.adress}
            </div>
            <div>
                Birthday: {props.birthday}
            </div>
            <div>
                Parties: {props.parties.map((party, index) => <div key={index}>{party}</div>)}
            </div>
            <button onClick={() => props.introducePerson(`${props.name} ${props.surname}`)}>
                Predstavi se
            </button>
            <hr/>
        </>
    )
}

export default Person