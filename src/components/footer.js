import { ReactComponent as Ios } from '../images/ios.svg'
import { ReactComponent as Android } from '../images/android.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'

const Footer = () => {
    return(
        <div>
        <footer className='footer p-2'>
                <div className='inside-footer'>
                <div className='footer-logo'>
                  <img src={require('../images/logo2.jpg')} alt='' />
                    <p className='mt-3'>Download Digi Mobile App</p>
                    <div className='footer-mobile ios d-flex align-items-center justify-content-center'>
                        <Ios />
                        <h4>iOS</h4>
                    </div>
                    <div className='footer-mobile android d-flex align-items-center justify-content-center'>
                        <Android />
                        <h4>Android</h4>
                    </div>
                </div>
                <div className='footer-legal'>
                    <p><a href='#top' className='mt-3'>Legal</a></p>
                    <p><a href='#top' className='mt-3'>Privacy policy</a></p>
                    <p><a href='#top' className='mt-3'>Terms of use</a></p>
                    <p><a href='#top' className='mt-3'>Report Abuse</a></p>
                    <p><a href='#top' className='mt-3'>Avoid scams & fraud</a></p>
                    <p><a href='#top' className='mt-3'>System status</a></p>
                </div>
                <div className='about-footer'>
                    <p><a href='#top' className='mt-3'>About Digi</a></p>
                    <p><a href='#top' className='mt-3'>Manufacturers</a></p>
                    <p><a href='#top' className='mt-3'>Careers</a></p>
                </div>
                </div>
                <div className='socials' style={{float: 'right', marginRight: '50px'}}>
                    <p className='mt-3'>Social Media</p>
                    <div className='d-flex align-items center justfy-content-center'>
                    <p><a href='#top' className='m-2'><Facebook /></a></p>
                    <p><a href='#top' className='m-2'><Instagram /></a></p>
                    <p><a href='#top' className='m-2'><Twitter /></a></p>
                    <p><a href='#top' className='m-2'><Linkedin /></a></p>
                    </div>
                </div>
            </footer>
            <div className='copy text-center'>
                <p>© copyright 2023 Digi</p>
            </div>
        </div>

    )
}
export default Footer
