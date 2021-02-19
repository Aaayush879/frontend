import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import {Sidebardata} from './Sidebardata';
import './Navbar.css';
import Wellness from './Wellness';





const Navbarr =() =>{
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return<div>
        <div className='navbar'>
            
             <MenuIcon onClick={showSidebar}/>
        




            


        </div>
        <nav className={sidebar ? 'navbar-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                {Sidebardata.map((item,index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}






                
                   
            </ul>
        </nav>
        
    </div>

}

export default Navbarr;

