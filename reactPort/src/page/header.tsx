
import {Link} from 'react-router-dom'
import Fatter from './footer';
import './index.css';
export default function Header(){



    return(
        <nav className='header1'>
            <title className='headerName'>An</title>
            
            <Link to="/aboutMe" className='headerRouter'>About Me</Link>
            
            <Link to="/portfolio" className='headerRouter'>Portfolio</Link>
            
            <Link to="/form" className='headerRouter'>Contact</Link>
            
            <Link to="/resume" className='headerRouter'>Resume</Link>
           
            <div>
                <Fatter/>
            </div>
        </nav>
    )
}