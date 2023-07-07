import Accordion from 'react-bootstrap/Accordion'

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
                                    <li><a href={`/electrical`}>Building Materials</a></li>
                                    <li><a href={`/electrical`}>Computers and accessories</a></li>
                                    <li><a href={`/electrical`}>Phone and accessories</a></li>
                                    <li><a href={`/electrical`}>Solar Pannels</a></li>
                                    <li><a href={`/electrical`}>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Chemical products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href={`/electrical`}>Building Materials</a></li>
                                    <li><a href={`/electrical`}>Computers and accessories</a></li>
                                    <li><a href={`/electrical`}>Phone and accessories</a></li>
                                    <li><a href={`/electrical`}>Solar Pannels</a></li>
                                    <li><a href={`/electrical`}>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/agriculture.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Farm Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href={`/electrical`}>Building Materials</a></li>
                                    <li><a href={`/electrical`}>Computers and accessories</a></li>
                                    <li><a href={`/electrical`}>Phone and accessories</a></li>
                                    <li><a href={`/electrical`}>Solar Pannels</a></li>
                                    <li><a href={`/electrical`}>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='accordion'>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/precision_manufacturing.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Mechanical Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href={`/electrical`}>Building Materials</a></li>
                                    <li><a href={`/electrical`}>Computers and accessories</a></li>
                                    <li><a href={`/electrical`}>Phone and accessories</a></li>
                                    <li><a href={`/electrical`}>Solar Pannels</a></li>
                                    <li><a href={`/electrical`}>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ul>
            </div>         
    )
}
export default Categories
