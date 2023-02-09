const Events = () => {
    const handleClick = () => {
        alert("ja sam alertoza")
    }


    const handlInputChange =(event) => {
        console.log(event.target.value)
    }
    

    const handleMouseOver = event => console.log("Naslov hoveran");

    return(
        <>
            <h1 onMouseEnter={handleMouseOver}>ReactJS event</h1>
            <input type="text" onChange={handlInputChange}/>
            <button onClick={handleClick}>Klikicem</button>
            <button onClick={() => alert('Test alert')}>Okini alert</button>
        </>
    )
}

export default Events;