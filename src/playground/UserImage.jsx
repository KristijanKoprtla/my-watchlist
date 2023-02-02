import logo from '../logo.svg'

function AdditionalDesc() {
    return (
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus voluptatum aperiam? Quo atque quas mollitia! Accusamus animi vitae, repellendus nihil neque eos ducimus, non, consequatur velit voluptatibus totam consequuntur.
        </p>
    )
}

function UserImage() {
    return (
        <div className='img-wrap'>
            <figure>
                <img src={logo} alt="" />
                <figcaption className='App-link'>React logo</figcaption>
            </figure>
            <AdditionalDesc />
        </div>
    )
}

export default UserImage;