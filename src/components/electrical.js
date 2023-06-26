import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { topDeals } from './home'
import { similar } from './home'

const Electrical = () => {

    return(
        <main>
          <div className='row'>
          <div className='categories row'>
            <div className='site-category mt-3 col-sm-3'>
                <h3 className=''>Categories</h3>
                <ul className="w-100">
                <Accordion>
                        <Accordion.Item eventKey='0' className=''>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Electrical Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Building Materials</a></li>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                    <li><a href='#top'>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className=''>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Chemical products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Building Materials</a></li>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                    <li><a href='#top'>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className=''>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/agriculture.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Farm Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Building Materials</a></li>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                    <li><a href='#top'>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='0' className=''>
                            <Accordion.Header className='accordion-item'>
                                <div className='accordion-header'>
                                    <img src={require('../images/precision_manufacturing.jpg')} alt='icon living' className='accordion-img' />
                                    <span className='accordion-span'>Mechanical Products</span>
                                </div>
                               </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href='#top'>Building Materials</a></li>
                                    <li><a href='#top'>Computers and accessories</a></li>
                                    <li><a href='#top'>Phone and accessories</a></li>
                                    <li><a href='#top'>Solar Pannels</a></li>
                                    <li><a href='#top'>Others</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ul>
            </div>
            <div className='all-view col-sm-9'>
                <a href='#top' className='back-track d-flex align-items-center justify-content-between'>
                    <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                    <p>Back</p>
                </a>
                <div className='indicators d-flex align-items-center justify-content-between'>
                    <Breadcrumb className='indi d-flex align-items-center justify-content-center'>
                        <Breadcrumb.Item href='#top' className='first breadcrumb'>Electrical Products</Breadcrumb.Item>
                        {/* <img src={require('../images/forward.jpg')} alt='' className='m-2'/> */}
                        <Breadcrumb.Item active className='second breadcrumb-active'>Others</Breadcrumb.Item>
                    </Breadcrumb>
                    <select>
                        <option>Sort by: Newest</option>
                        <option>Sort by: Date</option>
                    </select>
                </div>
                <div className='deal-card w-100 text-center m-3 row'>
                    { topDeals.map(item => {
                        return(
                            <div className='card-container m-3 col-sm-3 mobile-card-container' key={item.id}>
                                <p className='discount'>-{item.cut}%</p>
                                <img src={item.image} alt='...' className='icon'/>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className='price-container d-flex align-items-center justify-content-between'>
                                    <p className='price'>₹{item.dPrice}</p>
                                    <p className='price'>₹{item.realPrice}</p>
                                    <button className='btn details'>View Details</button>
                                </div>
                             </div>
                        )
                    })}
                </div>
          </div>
          </div>
          <div className='w-100 m-5'>
            <div className='w-100 d-flex mb-4 align-items-center justify-content-between'>
                <h1>You may also like</h1>
                <a href='#top'>View All</a>
            </div>
            <div className='also-like similar d-flex align-content-center justify-content-between'>
                { topDeals.map(item => {
                    return(
                        <div className='mobile-card p-2 card-container m-3 col-sm-3'>
                            <img src={require('../images/aircon.jpg')} alt='...' className='icon'/>
                            <h3>$10.30</h3>
                            <p>Solid mini deep air conditioning system</p>
                        </div>
                    )
                })}
                </div>
          </div>

                {/* **************SIMILAR PRODUCT ***************** */}
                <div className='popular-brand w-100 m-5'>
                    <div className='top-brand w-100 d-flex mb-4 align-items-center justify-content-between'>
                        <h1>Similar Products</h1>
                        <a href='#top'>View All</a>
                    </div>
                <div className='similar w-100'>
                  { similar.map(item => {
                    return(
                   <Card className='card m-2'>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                        <div className=''>
                        <p>
                            <img src={require('../images/factory.jpg')} alt='' />
                            The Madisson
                        </p>
                        <p>
                            <img src={require('../images/monetization_on.jpg')} alt='' />
                            7 million
                        </p>
                        <p>
                            <img src={require('../images/production.jpg')} alt='' />
                            $900 per container
                        </p>
                        </div>
                        </Card.Text>
                        <Button className="btn details">View Product Details </Button>
                    </Card.Body>
                    </Card>
                    )
                  })}
                </div>
                </div>    
                </div>
                <div>
            </div>
        </main>
    )
}

export default Electrical
