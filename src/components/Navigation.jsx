import '../styles/navigation.scss';
import navList from '../data/navigation.json';
function Navigation() {


    return(
        <nav className='main-nav'>
            <ul className="navItems">
                {navList.map((navItem, index) => <li key={index}><a href={navItem.url}>{navItem.title}</a></li>)}
            </ul>
            


        </nav>

    )
}

export default Navigation;