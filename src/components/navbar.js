import { Link, Outlet, useNavigate } from 'react-router-dom'
// import Accordion from 'react-bootstrap/Accordion'
import '../scss/app.scss'
import { useState } from 'react'
import Footer from './footer'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const NavBar = () => {
    const navigate = useNavigate()
    const [showCategory, setShowCategory] = useState(false)
    const [hideCategory, setHideCategory] = useState(true)
    const [ active, setActive ] = useState(0)


    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    const showCat = () => {
        console.log('show working')
        setShowCategory(true);
        setHideCategory(true);
        console.log('show worked')
    }
    const hideCat = () => {
        console.log('hide working')
        setHideCategory(false);
        console.log('hide worked')
    }

    const handleClick = (index) => {
        setActive(index);
    }

    return(
        <main>
          <div className='cat-div'>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-mobile">
            <div className='flex'>
                <button onClick={showCat} className="navbar-toggler toggle-on" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to={`/`}><span className='dig'>DIGI</span>
                <img src={require('../images/logo2.jpg')} alt='' className='img-register'/></Link>
            </div>
            {showCategory && (
                
            <div className={`${hideCategory ? 'show' : 'no-show'} category-show cat-nav navbar-collapse`} id="#navbarSupportedContent">
            <div className='d-flex align-self-items justify-content-between'>
              <h3 className=''>Categories</h3>
              <button className={`${hideCategory ? 'none' : ''}`} onClick={hideCat} style={{ border: 'none', outline: 'none'}}><img src={require('../images/cancel.jpg')} alt='' style={{ width: '30px', height: '30px'}} /></button>
            </div>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 category-nav">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                    </Typography>
                    <Typography>
                        <span className='accordion-span'>Electrical Products</span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                          <div className='ul-inner-aaccordion'>
                            <li className='p-3'><Link to={`/electrical`} className='no-underline text-black flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/electrical`} className='no-underline text-black flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/electrical`} className='no-underline text-black flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/electrical`} className='no-underline text-black flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/electrical`} className='no-underline text-black flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                          </div>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                    </Typography>
                    <Typography>
                        <span className='accordion-span'>Chemical Products</span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                          <div className='ul-inner-aaccordion'>
                            <li className='p-3'><Link to={`/chemical`} className='no-underline text-black flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/chemical`} className='no-underline text-black flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/chemical`} className='no-underline text-black flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/chemical`} className='no-underline text-black flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/chemical`} className='no-underline text-black flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                          </div>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                    </Typography>
                    <Typography>
                        <span className='accordion-span'>Farm Products</span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                          <div className='ul-inner-aaccordion'>
                            <li className='p-3'><Link to={`/farm`} className='no-underline text-black flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/farm`} className='no-underline text-black flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/farm`} className='no-underline text-black flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/farm`} className='no-underline text-black flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/farm`} className='no-underline text-black flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                          </div>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                    </Typography>
                    <Typography>
                        <span className='accordion-span'>Mechanical Products</span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                          <div className='ul-inner-aaccordion'>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                          </div>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </ul>

            {/***************SERVICES********************* */}

            <nav className='category-nav'>
            <h3 className='mt-4'>Services</h3>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                    </Typography>
                    <Typography>
                        <span className='accordion-span'>X-Services</span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                          <div className='ul-inner-aaccordion'>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                          </div>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                    </Typography>
                    <Typography>
                        <span className='accordion-span'>Send a qoute</span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                          <div className='ul-inner-aaccordion'>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                            <li className='p-3'><Link to={`/mechanical`} className='no-underline text-black flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                          </div>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </ul>

            <div className='categoty-login mt-4' style={{ background: '#EFF2F4', width: '100%'}}>
                <button style={{ height: '100%', border: 'none', marginLeft: '16px', marginBottom: '10px', fontSize: '16px'}} className='mt-3 reg-category' onClick={() => {navigate('/register')}}>Sign in | Register</button>
            </div>
            </nav>
            </div>
            )}
            <div className='auth-nav'>
              <button><span className="material-symbols-outlined nav-cart">shopping_cart</span></button>
              <img src={require('../images/auth-user.jpg')} alt='' className='user-nav'/>
            </div>
            <div className='nav mobile-nav'>
                <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                    <li className='nav-item'><Link className={`nav-link nav-nav ${active === 0 ? 'active' : '' }`} onClick={() => handleClick(0)} aria-current="true" to={`/`}>Home</Link></li>
                    <li className='nav-item'><Link className={`nav-link nav-nav ${active === 1 ? 'active' : '' }`} onClick={() => handleClick(1)} to={`/electrical`}>X-Services</Link></li>
                    <li className='nav-item'><Link className={`nav-link nav-nav ${active === 2 ? 'active' : '' }`} onClick={() => handleClick(2)} to='#top'>Contact Us</Link></li>
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
