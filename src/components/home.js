import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ReactComponent as Search } from "../images/search.svg"
import { ReactComponent as Drop } from "../images/Vector.svg"
import { ReactComponent as Location } from "../images/location.svg"
import { ReactComponent as AirCon } from "../images/aircon.svg"
import { ReactComponent as CarBrand } from "../images/car-brand.svg"
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

export const categories = [
  {
    icon: require('../images/electrical_services.jpg'),
    name: 'Electrical Products',
    drop: require('../images/Vector.jpg')
  },
  {
    icon: require('../images/science.jpg'),
    name: 'Chemical Products',
    drop: require('../images/Vector.jpg')
  },
  {
    icon: require('../images/agriculture.jpg'),
    name: 'Farm Products',
    drop: require('../images/Vector.jpg')
  },
  {
    icon: require('../images/precision_manufacturing.jpg'),
    name: 'Mechanical Products',
    drop: require('../images/Vector.jpg')
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
    name: 'Volvo',
  },
  {
    image: require('../images/similar.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/similar.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/similar.jpg'),
    name: 'Volvo',
  },
  {
    image: require('../images/similar.jpg'),
    name: 'Volvo',
  },
]


const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

    return(
        <main>
          <div className='home-div w-100 d-flex  flex-row m-auto align-items-center justify-content-center'>
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

          {/**************************CATEGORIES************** */}

          <div className='categories d-flex align-items-center justify-content-between'>
            <div className='site-category'>
                <h3 className=''>Categories</h3>
                <ul className="w-100">
                  { categories.map( item => {
                    return(
                    <li className="w-100">
                      <a href='#' className="w-100 d-flex align-items-center jusytify-content-between">
                        <img src={item.icon} alt='icon living' />
                        <p className='m-2'>{item.name}</p>
                        <img src={item.drop} alt='...' />
                      </a>
                    </li>
                    )
                  })}
                </ul>
            </div>

            {/**********************************SIDE PHOTOS******************* */}

            <div className='w-50 mt-4'>
            <img src={require('../images/cat-pic.jpg')} alt='...' className='sale' />
            </div>
            <div className='w-25 d-flex flex-column align-items-center justify-content-between'>
              { sidePhoto.map(item => {
                return(
                  <div className="mt-2"><img src={item.image} alt='...'/><span className='img-top'>{item.description}</span></div>
                )
              })}
            </div>
          </div>

          {/*****************TOP DEALS******************* */}

        <div className='top-deals m-4'>
            <h1>Top Deals</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#'>Cheapest Price Ever</a>
                <a href='#'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4 carousel slide' id='myCarousel' data-ride='carousel'>
           { topDeals.map(item => {
            return(
              <div className='card-container m-3'>
                  <p className='discount'>-{item.cut}%</p>
                  <img src={item.image} alt='...' className='icon'/>
                  {/* <AirCon className='icon' /> */}
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


        <div className='top-deals m-4'>
            <h1>Chemical Products</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#'>View All</a>
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
                      <p className='text-center'>{item.description}</p>
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
                <a href='#'>View All</a>
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
         <div className='top-deals m-4'>
            <h1>Plumbing Products</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#'>Cheapest Price Ever</a>
                <a href='#'>View All</a>
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
         <div className='top-deals m-4'>
            <h1>Featured Products</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#'>Cheapest Price Ever</a>
                <a href='#'>View All</a>
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
