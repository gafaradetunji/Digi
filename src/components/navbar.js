import { ReactComponent as Ios } from '../images/ios.svg'
import { ReactComponent as Android } from '../images/android.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'
import { Outlet, useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import '../scss/app.scss'
import { useState } from 'react'


const NavBar = () => {
    const navigate = useNavigate()
    const [showCategory, setShowCategory] = useState(false);
    const [hideCategory, setHideCategory] = useState(true);


    const showCat = () => {
        console.log('show working')
        setShowCategory(true);
        setHideCategory(true);
        console.log('show worked')
    }
    const hideCat = () => {
        console.log('hide working')
        setHideCategory(prevState => !prevState);
        console.log('hide worked')
    }

    return(
        <main>
          <div className='cat-div'>
            <nav className="navbar navbar-expand-lg">
        <div class="container-fluid nav-mobile">
            <div>
                <button onClick={showCat} className="navbar-toggler toggle-on" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href={`/`}>DIGI<img src={require('../images/logo2.jpg')} alt='' /></a>
            </div>
            {showCategory && (
                
            <div className={`collapse ${hideCategory ? 'show' : ''} category-show cat-nav navbar-collapse`} id="#navbarSupportedContent">
            <div className='d-flex align-self-items justify-content-between'>
              <h3 className=''>Categories</h3>
              <button className={`show ${hideCategory ? 'collapse' : ''}`}onClick={hideCat} style={{ border: 'none', outline: 'none'}}><img src={require('../images/cancel.jpg')} alt='' style={{ width: '30px', height: '30px'}} /></button>
            </div>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 category-nav">
            <Accordion>
                <Accordion.Item eventKey='0' className='nav-item'>
                    <Accordion.Header className='accordion-item p-2'>
                        <div className='accordion-header'>
                            <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                            <span className='accordion-span'>Electrical Products</span>
                        </div>
                        </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Building Materials</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Computers and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Phone and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Solar Pannels</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Others</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Chemical products</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                            <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Building Materials</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Computers and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Phone and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Solar Pannels</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Others</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/agriculture.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Farm Products</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                            <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Building Materials</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Computers and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Phone and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Solar Pannels</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Others</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/precision_manufacturing.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Mechanical Products</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                            <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Building Materials</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Computers and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Phone and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Solar Pannels</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Others</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>

            {/***************SERVICES********************* */}

            <nav className='category-nav'>
            <h3 className='mt-4'>Services</h3>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <Accordion>
                <Accordion.Item eventKey='0' className='nav-item'>
                    <Accordion.Header className='accordion-item p-2'>
                        <div className='accordion-header'>
                            <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                            <span className='accordion-span'>x-Services</span>
                        </div>
                        </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Building Materials</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Computers and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Phone and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Solar Pannels</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Others</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Send a quote</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                            <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Building Materials</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Computers and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Phone and accessories</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Solar Pannels</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item>
                              <Accordion.Header href='#top'>Others</Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>

            <div className='categoty-login'>
                <button className='reg-category' onClick={() => {navigate('/register')}}>Sign in | Register</button>
            </div>
            </nav>
            </div>
            )}
            <div className='mobile-cart'>
              <img src={require('../images/cart.jpg')} alt='' />
              <img src={require('../images/auth-user.jpg')} alt='' />
            </div>
                <div className='nav mobile-nav'>
                            <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                                <li className='nav-item'><a className='nav-link nav-nav active' aria-current="true" href={`/home`}>Home</a></li>
                                <li className='nav-item'><a className='nav-link nav-nav' href={`/electrical`}>X-Services</a></li>
                                <li className='nav-item'><a className='nav-link nav-nav' href='#top'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='auth mobile-nav'>
                            <button className='btn sign m-2' onClick={() => {navigate('/register')}}>Sign Up</button>
                            <button className='btn login m-2' onClick={() => {navigate('/login')}}>Login Now</button>
                        </div>
        </div>
        </nav>
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
          </div>
        </main>
    )
}
export default NavBar
