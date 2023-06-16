import { ReactComponent as Ios } from '../images/ios.svg'
import { ReactComponent as Android } from '../images/android.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'
import { Outlet } from 'react-router-dom'
import '../scss/app.scss'
const Navbar = () => {
    return(
        <main>
            <div className='top-nav w-100 mt-2 d-flex align-items-center justify-content-between'>
                <div className='logo d-flex align-items-center'><img src={require('../images/logo2.jpg')} alt='' /><h1>Digi</h1></div>
                <div className='nav'>
                    <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                        <li className='nav-item'><a className='nav-link active' aria-current="true" href={`home`}>Home</a></li>
                        <li className='nav-item'><a className='nav-link' href={`eletrical`}>X-Services</a></li>
                        <li className='nav-item'><a className='nav-link' href='#top'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='auth'>
                    <button className='btn sign m-2'>Sign Up</button>
                    <button className='btn login m-2'>Login Now</button>
                </div>
            </div>
            <Outlet />
            <footer className='footer row p-5'>
                <div className='footer-logo col-sm-6'>
                <img src={require('../images/logo2.jpg')} alt='' />
                    <p>Download Digi Mobile App</p>
                    <div className='footer-mobile ios d-flex align-items-center justify-content-center'>
                        <Ios />
                        <h4>iOS</h4>
                    </div>
                    <div className='footer-mobile android d-flex align-items-center justify-content-center'>
                        <Android />
                        <h4>Android</h4>
                    </div>
                </div>
                <div className='about-footer col-sm-2'>
                    <p><a href='#top'>About Digi</a></p>
                    <p><a href='#top'>Manufacturers</a></p>
                    <p><a href='#top'>Careers</a></p>
                </div>
                <div className='footer-legal col-sm-2'>
                    <p><a href='#top'>Legal</a></p>
                    <p><a href='#top'>Privacy policy</a></p>
                    <p><a href='#top'>Terms of use</a></p>
                    <p><a href='#top'>Report Abuse</a></p>
                    <p><a href='#top'>Avoid scams & fraud</a></p>
                    <p><a href='#top'>System status</a></p>
                </div>
                <div className='socials col-sm-2'>
                    <p><a href='#top'>Social Media</a></p>
                    <p><a href='#top'><Facebook /></a></p>
                    <p><a href='#top'><Instagram /></a></p>
                    <p><a href='#top'><Twitter /></a></p>
                    <p><a href='#top'><Linkedin /></a></p>
                </div>
            </footer>
            <div className='copy text-center'>
                <p>© copyright 2023 Digi</p>
            </div>
        </main>
    )
}
export default Navbar
