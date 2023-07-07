import { Outlet, useNavigate } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import '../scss/app.scss'
import { useState } from 'react'
import Footer from './footer'


const NavBar = () => {
    const navigate = useNavigate()
    const [showCategory, setShowCategory] = useState(false)
    const [hideCategory, setHideCategory] = useState(true)
    const [showElement, setShowElement] = useState(false);


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

    const hideBuildFunc = () => {
        setShowElement(!showElement);
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
                <a className="navbar-brand" href={`/`}><span className='dig'>DIGI</span><img src={require('../images/logo2.jpg')} alt='' className='img-register'/></a>
            </div>
            {showCategory && (
                
            <div className={`collapse ${hideCategory ? 'show' : ''} category-show cat-nav navbar-collapse`} id="#navbarSupportedContent">
            <div className='d-flex align-self-items justify-content-between'>
              <h3 className=''>Categories</h3>
              <button className={`show ${hideCategory ? 'collapse' : ''}`} onClick={hideCat} style={{ border: 'none', outline: 'none'}}><img src={require('../images/cancel.jpg')} alt='' style={{ width: '30px', height: '30px'}} /></button>
            </div>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 category-nav">
            <Accordion flush>
                <Accordion.Item eventKey='0' className='nav-item'>
                    <Accordion.Header className='accordion-item p-2'>
                        <div className='accordion-header'>
                            <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                            <span className='accordion-span'>Electrical Products</span>
                        </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <ul>
                          <div className={`ul-inner-accordion ${ showElement ? 'hide-inner-cat' : 'show-inner-cat' }`}>
                            <button className='mb-5 back-arrow' onClick={hideBuildFunc}><img src={require('../images/back-arrow.jpg')} alt='' /></button>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Building Materials</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Computers and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Phones and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Solar Panels</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Others</a><img src={require('../images/forward.jpg')} alt='' /></li>
                          </div>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Accordion flush>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Chemical products</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <div className={`ul-inner-accordion ${ showElement ? 'hide-inner-cat' : 'show-inner-cat' }`}>
                              <button className='mb-5 back-arrow' onClick={hideBuildFunc}><img src={require('../images/back-arrow.jpg')} alt='' /></button>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Building Materials</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Computers and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Phones and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Solar Panels</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Others</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            </div>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion flush>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/agriculture.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Farm Products</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                        <ul>
                          <div className={`ul-inner-accordion ${ showElement ? 'hide-inner-cat' : 'show-inner-cat' }`}>
                            <button className='mb-5 back-arrow' onClick={hideBuildFunc}><img src={require('../images/back-arrow.jpg')} alt='' /></button>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Building Materials</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Computers and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Phones and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Solar Panels</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Others</a><img src={require('../images/forward.jpg')} alt='' /></li>
                          </div>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion flush>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/precision_manufacturing.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Mechanical Products</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <div className={`ul-inner-accordion ${ showElement ? 'hide-inner-cat' : 'show-inner-cat' }`}>
                              <button className='mb-5 back-arrow' onClick={hideBuildFunc}><img src={require('../images/back-arrow.jpg')} alt='' /></button>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Building Materials</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Computers and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Phones and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Solar Panels</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Others</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            </div>
                          </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>

            {/***************SERVICES********************* */}

            <nav className='category-nav'>
            <h3 className='mt-4'>Services</h3>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <Accordion flush>
                <Accordion.Item eventKey='0' className='nav-item'>
                    <Accordion.Header className='accordion-item p-2'>
                        <div className='accordion-header'>
                            <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                            <span className='accordion-span'>x-Services</span>
                        </div>
                        </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                          <div className={`ul-inner-accordion ${ showElement ? 'hide-inner-cat' : 'show-inner-cat' }`}>
                            <button className='mb-5 back-arrow' onClick={hideBuildFunc}><img src={require('../images/back-arrow.jpg')} alt='' /></button>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Building Materials</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Computers and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Phones and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Solar Panels</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Others</a><img src={require('../images/forward.jpg')} alt='' /></li>
                          </div>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                <Accordion flush>
                    <Accordion.Item eventKey='0' className='nav-item'>
                        <Accordion.Header className='accordion-item p-2'>
                            <div className='accordion-header'>
                                <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                <span className='accordion-span'>Send a quote</span>
                            </div>
                            </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <div className={`ul-inner-accordion ${ showElement ? 'hide-inner-cat' : 'show-inner-cat' }`}>
                              <button className='mb-5 back-arrow' onClick={hideBuildFunc}><img src={require('../images/back-arrow.jpg')} alt='' /></button>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Building Materials</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Computers and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Phones and Accessories</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Solar Panels</a><img src={require('../images/forward.jpg')} alt='' /></li>
                              <li className='p-3 after d-flex align-items-center justify-content-between'><a href={`/electrical`} >Others</a><img src={require('../images/forward.jpg')} alt='' /></li>
                            </div>
                          </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>

            <div className='categoty-login mt-4' style={{ background: '#EFF2F4', width: '100%'}}>
                <button style={{ height: '100%', border: 'none', marginLeft: '16px', marginBottom: '10px', fontSize: '16px'}} className='mt-3 reg-category' onClick={() => {navigate('/register')}}>Sign in | Register</button>
            </div>
            </nav>
            </div>
            )}
            <div className='auth-nav'>
              <img src={require('../images/cart.jpg')} alt='' className='nav-cart'/>
              <img src={require('../images/auth-user.jpg')} alt='' className='user-nav'/>
            </div>
            <div className='nav mobile-nav'>
                <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                    <li className='nav-item'><a className='nav-link nav-nav active' aria-current="true" href={`/`}>Home</a></li>
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
            <Footer />
            </div>
        </main>
    )
}
export default NavBar
