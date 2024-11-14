
import {Link} from 'react-router-dom'

import './index.css';
export default function Header(){



    return(
        <nav className='header1'>
            
            <div className='headerName'>An</div>
            
            <Link to="/aboutMe" className='headerRouter'>About Me</Link>
            
            <Link to="/portfolio" className='headerRouter'>Portfolio</Link>
            
            <Link to="/contact" className='headerRouter'>Contact</Link>
            
            <Link to="/resume" className='headerRouter'>Resume</Link>
           
          
        </nav>
     
    )
}