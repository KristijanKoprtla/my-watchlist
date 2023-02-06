import navList from '../data/navigation.json';
function Navigation() {


    return(
        <ul className="navItems">
            {navList.map((navItem, index) => <li key={index}><a href={navItem.url}>{navItem.title}</a></li>)}
        </ul>
        
    )
}

export default Navigation;