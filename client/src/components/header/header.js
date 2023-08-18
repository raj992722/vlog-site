import {Link} from 'react-router-dom';



const Header=()=>{
    return (
        <nav>
        <ul>
        <li>
        <Link to='/'>Home</Link>
        <Link to='/create-post'>Create Post</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>

        </li>
        
        
        </ul>
        
        </nav>
    )
}

export default Header;