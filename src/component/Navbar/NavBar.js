import './navbar.css';
import { NavItem } from '../NavItems/NavItem';

export function NavBar() {

    return (
        <>

            
            <div className='nav' id='nav'>
                <div className='nav-bar'>
                    <NavItem name='Contact' />
                    <NavItem name='Skills' />
                    <NavItem name='Projects' />
                    <NavItem name='Certificates' />
                </div>
                <div className='nav-open' id='nav-open' >
                    Open
                </div> 
             </div>
            
        </>
    );
}
