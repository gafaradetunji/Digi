import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'

const Categories = () => {
    return(
            <div className='site-category mt-3 col-xl-3'>
                <h3 className=''>Categories</h3>
                <ul className="w-100">
                <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='wd-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Electrical Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><Link to={`/electrical`} className='elect-a'>Building Materials</Link></li>
                                    <li><Link to={`/electrical`} className='elect-a'>Computers and accessories</Link></li>
                                    <li><Link to={`/electrical`} className='elect-a'>Phone and accessories</Link></li>
                                    <li><Link to={`/electrical`} className='elect-a'>Solar Pannels</Link></li>
                                    <li><Link to={`/electrical`} className='elect-a'>Others</Link></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='wd-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Chemical products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><Link to={`/chemical`} className='elect-a'>Building Materials</Link></li>
                                    <li><Link to={`/chemical`} className='elect-a'>Computers and accessories</Link></li>
                                    <li><Link to={`/chemical`} className='elect-a'>Phone and accessories</Link></li>
                                    <li><Link to={`/chemical`} className='elect-a'>Solar Pannels</Link></li>
                                    <li><Link to={`/chemical`} className='elect-a'>Others</Link></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='wd-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/agriculture.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Farm Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><Link to={`/farm`} className='elect-a'>Building Materials</Link></li>
                                    <li><Link to={`/farm`} className='elect-a'>Computers and accessories</Link></li>
                                    <li><Link to={`/farm`} className='elect-a'>Phone and accessories</Link></li>
                                    <li><Link to={`/farm`} className='elect-a'>Solar Pannels</Link></li>
                                    <li><Link to={`/farm`} className='elect-a'>Others</Link></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='wd-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/precision_manufacturing.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Mechanical Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><Link to={`/mechanical`} className='elect-a'>Building Materials</Link></li>
                                    <li><Link to={`/mechanical`} className='elect-a'>Computers and accessories</Link></li>
                                    <li><Link to={`/mechanical`} className='elect-a'>Phone and accessories</Link></li>
                                    <li><Link to={`/mechanical`} className='elect-a'>Solar Pannels</Link></li>
                                    <li><Link to={`/mechanical`} className='elect-a'>Others</Link></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ul>
            </div>         
    )
}
export default Categories
