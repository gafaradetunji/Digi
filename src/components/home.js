import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import { ReactComponent as Search } from "../images/search.svg"
import { ReactComponent as Drop } from "../images/Vector.svg"
import { ReactComponent as Location } from "../images/location.svg"
import { ReactComponent as Bike } from "../images/bike.svg"
import { ReactComponent as Auto } from "../images/auto.svg"
import { ReactComponent as Settings } from "../images/settings.svg"

const featured_data = [
  {
    image: require('../images/tesla.jpg'),
    description: 'Best Car Parts Deal'
  },
  {
    image: require('../images/tesla.jpg'),
    description: 'Best Car Parts Deal'
  },
  {
    image: require('../images/tesla.jpg'),
    description: 'Best Car Parts Deal'
  },
  {
    image: require('../images/tesla.jpg'),
    description: 'Best Car Parts Deal'
  }
]

const sidePhoto = [
  {
    image: require('../images/cat-img1.jpg'),
    description: '$10 off with a new supplier'
  },
  {
    image: require('../images/cat-img2.jpg'),
    description: 'Send quotes with  preferences'
  },
  {
    image: require('../images/cat-img3.jpg'),
    description: 'Best Deal around the globe'
  }
]

export const topDeals = [
  {
    cut: 10,
    image: require('../images/aircon.jpg'),
    name: 'Air conditioning system',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: '2kva Electrical Transformer',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Portable Loud Speakers',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Solar Street light',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Portable Loud Speakers',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/aircon.jpg'),
    name: 'Air conditioning system',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: '2kva Electrical Transformer',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Solar Street light',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]
const chemicals = [
  {
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]

const featured = [
  {
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]

const plumbing = [
  {
    cut: 10,
    image: require('../images/tap.jpg'),
    name: 'Flush for Water closet',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/thermo.jpg'),
    name: 'Electric water heater',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/closet.jpg'),
    name: 'Water closet',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/thermo.jpg'),
    name: 'Electric Water Heater',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/tap.jpg'),
    name: 'Flush for Water closet',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]

export const popularBrands = [
  {
    image: require('../images/car-brand.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/car-brand.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/car-brand.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/car-brand.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/car-brand.jpg'),
    name: 'Volvo',
  },
]

export const similar = [
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
]


const Home = () => {

    return(
        <main>
          <form className='mobile-form'>
            <Search className='search-icon'/> 
            <input type='text' className='' placeholder='Search Digistore'/>
          </form>
          <div className='home-mobile'>
          <div className='home-div w-100 d-flex flex-row m-auto align-items-center justify-content-center'>
            <div className='top-home w-50 text-center'>
              <h1>Yorem Ipsum dolor sit amet</h1>
              <form className='search mt-3 d-flex align-items-center flex-row w-100 align-self-center'>
                <Search className='search-icon'/> 
                <input type='text' className='' placeholder='Search Digistore'/>
                <div className='icon-div h-100 d-flex align-items-center justify-content-center'>
                  <Location />
                  <p className='text-center anywhere'>Anywhere</p>
                  <Drop />
                </div>
              </form>
            </div>
          </div>
          </div>

          {/**************************CATEGORIES************** */}

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
            <div className='w-50 pt-5 col-sm-6'>
            <img src={require('../images/cat-pic.jpg')} alt='...' className='sale mobile-pic' />
            </div>
            <div className='side-photo col-sm-3'>
              <div className='w-25 mt-5 d-flex flex-column align-items-center justify-content-between'>
                { sidePhoto.map(item => {
                  return(
                    <div className="mt-2 absolute-img"><img src={item.image} alt='...'/><span className='img-top'>{item.description}</span></div>
                  )
                })}
              </div>
            </div>
          </div>

            {/**********************************SIDE PHOTOS******************* */}


          {/*****************TOP DEALS******************* */}

        <div className='top-deals mt-4'>
            <h1>Top Deals</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#top'>Cheapest Price Ever</a>
                <a href='#top'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4 carousel slide' id='myCarousel' data-ride='carousel'>
           { topDeals.map(item => {
            return(
              <div className='card-container m-3'>
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

         {/* /****************CHEMICAL PRODUCTS *********/}


        <div className='top-deals mt-4'>
            <h1>Chemical Products</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#top'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4'>
           { chemicals.map(item => {
            return(
              <div className='card-container m-3'>
                  <p className='discount'>-{item.cut}%</p>
                  <img src={item.image} alt='...' />
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
         {/* /************************FEATURED MANUFACTURERS****************  */}

       <Carousel className='carousel mt-5'>
            <h1>Featured Manufacturers</h1>
            { featured_data.map( item => {
              return(
                <Carousel.Item className='carousel-img'>
                    <img src={item.image} alt='oookkkkk' className='req-img d-block'/>
                    <Carousel.Caption>
                      <p className='text-center carousel-p'>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
              )
            })}
         </Carousel>
            <div className='changes d-flex align-items-center justify-content-center mt-5'>
                <div className='active-changes active m-2'></div>
                <div className='active-changes m-2'></div>
                <div className='active-changes m-2'></div>
                <div className='active-changes m-2'></div>
              <div className='clear'></div>
            </div>


         {/* <div className='carousel mt-5'>
            <h1>Featured Manufacturers</h1>
            <div className='carousel-img'>
                <img src={require('../images/tesla.jpg')} alt='' className='req-img'/>
                  <p className='text-center'>Best Car Parts Deal</p>
            </div>
            <div className='changes d-flex align-items-center justify-content-center mt-5'>
                <div className='active-changes active m-2'></div>
                <div className='active-changes m-2'></div>
                <div className='active-changes m-2'></div>
                <div className='active-changes m-2'></div>
              <div className='clear'></div>
            </div>
         </div> */}


         {/* /******************************POPULAR BRANDS******************** * */}
         <div className='popular-brand w-100 mb-5'>
            <div className='top-brand d-flex align-items-center justify-content-between'>
                <h1>Popular Brand Products</h1>
                <a href='#top'>View All</a>
            </div>
            <div className='brands w-100 mt-4'>
              { popularBrands.map(item => {
              return(
                <div className='brand-card text-center m-4 col-sm-3'>
                    <div className='brands-img p-4'>
                      <img src={item.image} alt='...' />
                      {/* <CarBrand /> */}
                    </div>
                    <div className='brand-inner mt-3'>
                        <h3 className='mt-4'>{item.name}</h3>
                        <div className='automobile d-flex align-items-center justify-content-center'>
                          <Auto />
                          <h4 className=''>Automobile</h4>
                        </div>
                        <div className='automobile d-flex align-items-center justify-content-center'>
                          <Settings />
                          <h4 className=''>Parts</h4>
                        </div>
                        <div className='automobile d-flex align-items-center justify-content-center'>
                          <Bike />
                          <h4 className=''>Bicycle</h4>
                        </div>
                        <button className='btn details'>View Product Details</button>
                    </div>
                </div>
                    )
                  })}
            </div>
         </div>


         {/***************************AFTER BRAND****************** */}


         <div className='container m-auto after-brand row'>
            <div className='first-after col-sm-3'>
                <h3>Get the best Deals and offers from Digi Store</h3>
                <div className='time d-flex'>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>04<p className='p-tag text-center m-auto'>Days</p></p></div>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>13<p className='p-tag text-center m-auto'>Hours</p></p></div>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>34<p className='p-tag text-center m-auto'>Mins</p></p></div>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>56<p className='p-tag text-center m-auto'>Secs</p></p></div>
                </div>
            </div>
            <div className='second-after col-sm-8 text-center row'>
                <div className='closet col-sm-3'>
                    <img src={require('../images/closet.jpg')} alt='closet' />
                    <p>Water Closet</p>
                    <span className='span'>-25%</span>
                </div>
                <div className='closet col-sm-3'>
                    <img src={require('../images/closet.jpg')} alt='closet' />
                    <p>Water Closet</p>
                    <span className='span'>-25%</span>
                </div>
                <div className='closet col-sm-3'>
                    <img src={require('../images/closet.jpg')} alt='closet' />
                    <p>Water Closet</p>
                    <span className='span'>-25%</span>
                </div>
                <div className='closet col-sm-3'>
                    <img src={require('../images/closet.jpg')} alt='closet' />
                    <p>Water Closet</p>
                    <span className='span'>-25%</span>
                </div>
            </div>
         </div>
         {/**********************************PLUMBING PRODUCTS********************** */}
         <div className='top-deals mt-4'>
            <h1>Plumbing Products</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#top'>Cheapest Price Ever</a>
                <a href='#top'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4'>
            { plumbing.map(item => {
              return(
              <div className='card-container m-3'>
                  <p className='discount'>-{item.cut}%</p>
                  <img src={item.image} alt='' />
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
         {/**************************FEATURED PRODUCTS********************** */}
         <div className='top-deals mt-4'>
            <h1>Featured Products</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#top'>Cheapest Price Ever</a>
                <a href='#top'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4'>
            { featured.map(item => {
                return(
                  <div className='card-container m-3'>
                      <p className='discount'>-{item.cut}%</p>
                      <img src={item.image} alt='' />
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
        </main>
    )
}

export default Home
