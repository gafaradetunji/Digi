import { ReactComponent as Location } from '../images/location.svg'
import { ReactComponent as Drop } from '../images/Vector.svg'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Footer from './footer'
const Nav2 = () => {
    const [ active, setActive ] = useState(1)

    const handleClick = (index) => {
        setActive(index);
    }
    return(
        <main>
            <div className='top-nav container-fluid pt-4 d-flex align-items-center justify-content-between mobile-nav2'>
              <div className='d-flex align-items-center justify-content-between logo'><h1>Digi</h1><img src={require('../images/logo2.jpg')} alt='' /></div>
              <form className='search d-flex align-items-center flex-row'>
                <img src={require('../images/search.jpg')} alt='' />
                <input type='text' className='' placeholder='Search Digistore'/>
                <div className='icon-div d-flex align-items-center justify-content-center'>
                  <Location />
                  <p className='text-center anywhere'>Anywhere</p>
                  <Drop />
                 </div>
              </form>
                <div className='ul-div d-flex align-items-center justify-content-between'>
                    <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                        <li className='nav-item'><Link className={`nav-link ${active === 0 ? 'active' : '' }`} onClick={() => handleClick(0)} to={`/`}>Home</Link></li>
                        <li className='nav-item'><Link className={`nav-link ${active === 1 ? 'active' : '' }`} onClick={() => handleClick(1)} aria-current="true" to='#top'>X-Services</Link></li>
                        <li className='nav-item'><Link className={`nav-link ${active === 2 ? 'active' : '' }`} onClick={() => handleClick(2)} to='#top'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='auth-user'>
                    <Link to='#top' className='d-flex align-items-center justify-content-between'>
                        <img src={require('../images/auth-user.jpg')} alt='user...' />
                        <p>OluwaSender</p>
                        <img src={require('../images/log-drop.jpg')} alt='...' />
                    </Link>
                </div>
            </div>
            <Outlet />
            <Footer />        
            </main>
    )
}
export default Nav2
