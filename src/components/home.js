import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { LazyLoadImage } from "react-lazy-load-image-component"
import { ReactComponent as Drop } from "../images/Vector.svg"
import { ReactComponent as Location } from "../images/location.svg"
import { ReactComponent as Bike } from "../images/bike.svg"
import { ReactComponent as Auto } from "../images/auto.svg"
import { ReactComponent as Settings } from "../images/settings.svg"
import { useRef } from 'react'
import Categories from './categories'
import { useNavigate, Link } from 'react-router-dom';
import Search from './mobile_search_icon'

export const topDeals = [
  {
    id: 1,
    cut: 10,
    image: require('../images/aircon.jpg'),
    name: 'Air conditioning system',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 2,
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: '2kva Electrical Transformer',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 3,
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Portable Loud Speakers',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 4,
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Solar Street light',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 5,
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Portable Loud Speakers',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 6,
    cut: 10,
    image: require('../images/aircon.jpg'),
    name: 'Air conditioning system',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 7,
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: '2kva Electrical Transformer',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 8,
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Solar Street light',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]
export const chemicals = [
  {
    id: 1,
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 2,
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 3,
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 4,
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 5,
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 6,
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 7,
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 8,
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]

export const featured = [
  {
    id: 1,
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 2,
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 3,
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 4,
    cut: 10,
    image: require('../images/speaker.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 5,
    cut: 10,
    image: require('../images/pop.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 6,
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 7,
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 8,
    cut: 10,
    image: require('../images/transformer.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
]

export const plumbing = [
  {
    id: 1,
    cut: 10,
    image: require('../images/tap.jpg'),
    name: 'Flush for Water closet',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 2,
    cut: 10,
    image: require('../images/thermo.jpg'),
    name: 'Electric water heater',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 3,
    cut: 10,
    image: require('../images/closet.jpg'),
    name: 'Water closet',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 4,
    cut: 10,
    image: require('../images/thermo.jpg'),
    name: 'Electric Water Heater',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 5,
    cut: 10,
    image: require('../images/tap.jpg'),
    name: 'Flush for Water closet',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 6,
    cut: 10,
    image: require('../images/ice.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 7,
    cut: 10,
    image: require('../images/solar.jpg'),
    name: 'Ajepako Timber',
    description: 'Worem ipsum dolor sit amet,adipiscing elit. Worem ipsum dolor sit amet,adipiscing elit.Worem ipsum dolor sit amet,adipiscing elit.',
    dPrice: 20,
    realPrice: 22,
  },
  {
    id: 8,
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
    id: 1,
    image: require('../images/volvo.jpg'),
    name: 'Volvo',
  },
  {
    id: 2,
    image: require('../images/car-brand.jpg'),
    name: 'Merck',
  },
  {
    id: 3,
    image: require('../images/volvo.jpg'),
    name: 'Volvo',
  },
  {
    id: 4,
    image: require('../images/car-brand.jpg'),
    name: 'Merck',
  },
  {
    id: 5,
    image: require('../images/volvo.jpg'),
    name: 'Volvo',
  },
]

export const similar = [
  {
    id: 1,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 2,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 3,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 4,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 5,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 6,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 7,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 8,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
  {
    id: 9,
    image: require('../images/similar.jpg'),
    name: '9” Curvy Pipe',
  },
]

export const featured_carousel = [
  {
    id: 1,
    image: require('../images/tesla.jpg'),
    desc: 'Cool Exotic Rides1'
  },
  {
    id: 2,
    image: require('../images/tesla.jpg'),
    desc: 'Best Car Deals2'
  },
  {
    id: 3,
    image: require('../images/tesla.jpg'),
    desc: 'Cool Rides3'
  },
  {
    id: 4,
    image: require('../images/tesla.jpg'),
    desc: 'Cool Rides4'
  },
]

export const sidePhoto = [
  {
    id: 1,
    image: require('../images/cat-img1.jpg'),
    description: '$10 off with a new supplier'
  },
  {
    id: 2,
    image: require('../images/cat-img2.jpg'),
    description: 'Send quotes with  preferences'
  },
  {
    id: 3,
    image: require('../images/cat-img3.jpg'),
    description: 'Best Deal around the globe'
  }
]

const Home = () => {
  const navigate = useNavigate()
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  }

  const settings = {
    dots: true,
    draggable: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  
    return(
        <main>
          <Search />
          <div className='home-mobile'>
            <div className='home-div w-100 d-flex flex-row m-auto align-items-center justify-content-center'>
              <div className='top-home w-50 text-center'>
                <h1>Yorem Ipsum dolor sit amet</h1>
                <form className='search mt-3 d-flex align-items-center flex-row w-100 align-self-center'>
                  <img src={require('../images/search.jpg')} alt='' className='search-icon'/> 
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
          <div className='categories d-flex align-items-center justify-content-between'>
            <Categories />
            <div className='flex'>
                <img src={require('../images/cat-pic.jpg')} alt='...' className='ml-2 rounded-md w-[85%] h-[140px] mr-0 lg:w-[800px] lg:h-[350px]' />
              </div>
              <div className='ml-0'>
                <div className='side-photo relative'>
                  { sidePhoto.map(item => {
                    return(
                      <div className="absolute-img"><img src={item.image} alt='...' className='my-2 h-[35px] lg:h-[100px] lg:w-[250px] w-[100px] sale-img lg:ml-0'/><div className='flex flex-column absolute h-[200px]  lg:w-[250px] lg:text-[16px] w-[50px] img-top'><span className='absolute font-semibold text-center lg:text-[16px] text-[7px] font-serif text-white top-[-40px] lg:top-[-90px]'>{item.description}</span></div></div>
                    )
                  })}
                </div>
              </div>
          </div>
          {/*****************TOP DEALS******************* */}

        <div className='top-deals mt-4'>
            <h1>Top Deals</h1>
            <div className='link d-flex align-items-center justify-content-between'>
                <a href='#top' className='cheap-price'>Cheapest Price Ever</a>
                <a href='#top' className='view-all'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4'>
           { topDeals.map(item => {
            return(
              <Link style={{ textDecoration: 'none'}} className='text-black' to={`electrical/product/${item.id}`}>
                <div className='mobile-card m-3' key={item.id}>
                    <p className='discount'>-{item.cut}%</p>
                    <img src={item.image} alt='...' className='icon'/>
                    <h3>{item.name}</h3>
                    { window.innerWidth <= 600 ? 
                      <p className='desc'>{item.description.substring(0, 40) + '...'}</p>
                      :<p className='desc'>{item.description}</p> 
                    }
                    <div className='price-container d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center'>
                        <p className='price'>₹{item.dPrice}</p>
                        <p className='price'>₹{item.realPrice}</p>
                      </div>
                        { window.innerWidth <= 600 ? 
                          <button className='btn details' onClick={() => { navigate(`electrical/product/${item.id}`)}}>View</button>
                          : <button className='btn details' onClick={() => { navigate(`electrical/product/${item.id}`)}}>View Details</button>
                        }
                    </div>
                </div>
              </Link>
            )
           })}
         </div>
         </div>

         {/* /****************CHEMICAL PRODUCTS *********/}


        <div className='top-deals mt-4'>
            <div className='link d-flex align-items-center justify-content-between'>
              <h1 className='h1'>Chemical Products</h1>
              <a href='#top' className='view-all'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4'>
           { chemicals.map(item => {
            return(
              <Link style={{ textDecoration: 'none'}} className='text-black' to={`chemical/product/${item.id}`}>
                <div className='mobile-card m-3' key={item.id}>
                    <p className='discount'>-{item.cut}%</p>
                    <img src={item.image} alt='...' className='icon'/>
                    <h3>{item.name}</h3>
                    { window.innerWidth <= 600 ? 
                      <p className='desc'>{item.description.substring(0, 40) + '...'}</p>
                      :<p className='desc'>{item.description}</p> 
                    }
                    <div className='price-container d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center'>
                        <p className='price'>₹{item.dPrice}</p>
                        <p className='price'>₹{item.realPrice}</p>
                      </div>
                      { window.innerWidth <= 600 ? 
                          <button className='btn details' onClick={() => { navigate(`chemical/product/${item.id}`)}}>View</button>
                          : <button className='btn details' onClick={() => { navigate(`chemical/product/${item.id}`)}}>View Details</button>
                      }
                    </div>
                </div>
              </Link>
            )
           })}
         </div>
         
         {/* /************************FEATURED MANUFACTURERS****************  */}         
      <div className='feature'>
        <h1>Featured Manufacturers</h1>
        <Slider 
          ref={sliderRef} 
          {...settings}
          className='inner-feature'
        >
        { featured_carousel.map((item) => {
          return(
            <div className={`in-feature`} key={item.id}>
              <img src={item.image} alt='' />
              <p className='text'>{item.desc}</p>
            </div>
          )
          })}
        </Slider>
        
        <div className='carousel-arrow'>
              <button className='arrow-but backward' onClick={previous}>
                <span className="material-symbols-outlined main-arrow">
                    arrow_back_ios_new
                </span>
              </button>
              <button className='arrow-but forward' onClick={next}>
                <span className="material-symbols-outlined main-arrow">
                    arrow_forward_ios
                  </span>
              </button>
          </div>
      </div>
         {/* /******************************POPULAR BRANDS******************** * */}
         <div className='popular-brand w-100 mb-5 mt-5'>
            <div className='top-brand d-flex align-items-center justify-content-between'>
                <h1>Popular Products</h1>
                <a href='#top' className='popular-a'>View All</a>
            </div>
            <div className='brands d-flex'>
              { popularBrands.map(item => {
              return(
                <Link style={{ textDecoration: 'none'}}>
                  <div className='brand-card text-center' key={item.id}>
                      <div className='brands-img'>
                        <img src={item.image} alt='...' className='brands-image'/>
                      </div>
                      <div className='brand-inner'>
                          <h3 className=''>{item.name}</h3>
                          <div className='automobile d-flex align-items-center'>
                            <Auto />
                            <h4 className=''>Automobile</h4>
                          </div>
                          <div className='automobile d-flex align-items-center'>
                            <Settings />
                            <h4 className=''>Parts</h4>
                          </div>
                          <div className='automobile d-flex align-items-center'>
                            <Bike />
                            <h4 className=''>Bicycle</h4>
                          </div>
                          <button className='btn details'>View Product Details</button>
                      </div>
                  </div>
                </Link>
                    )
                  })}
            </div>
         </div>


         {/***************************AFTER BRAND****************** */}


         <div className='m-auto after-brand'>
            <div className='first-after col-sm-3 d-flex align-items-center justify-content-center'>
                <h3>Get the best Deals and offers from Digi Store</h3>
                <div className='time d-flex'>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>04<p className='p-tag text-center m-auto'>Days</p></p></div>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>13<p className='p-tag text-center m-auto'>Hours</p></p></div>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>34<p className='p-tag text-center m-auto'>Mins</p></p></div>
                    <div className='date bg-dark'><p className='p-brand text-center m-auto'>56<p className='p-tag text-center m-auto'>Secs</p></p></div>
                </div>
            </div>
            <div className='second-after col-sm-8 text-center'>
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
                <a href='#top' className='cheap-price'>Cheapest Price Ever</a>
                <a href='#top' className='view-all'>View All</a>
            </div>
         <div className='deal-card mt-4'>
            { plumbing.map(item => {
              return(
                <Link style={{ textDecoration: 'none'}} className='text-black' to={`farm/product/${item.id}`}>
                <div className='mobile-card m-3' key={item.id}>
                    <p className='discount'>-{item.cut}%</p>
                    <img src={item.image} alt='' className='icon'/>
                    <h3>{item.name}</h3>
                    { window.innerWidth <= 600 ? 
                      <p className='desc'>{item.description.substring(0, 40) + '...'}</p>
                      :<p className='desc'>{item.description}</p> 
                    }
                    <div className='price-container d-flex align-items-center justify-content-between'>
                        <p className='price'>₹{item.dPrice}</p>
                        <p className='price'>₹{item.realPrice}</p>
                        { window.innerWidth <= 600 ? 
                          <button className='btn details' onClick={() => { navigate(`farm/product/${item.id}`)}}>View</button>
                          : <button className='btn details' onClick={() => { navigate(`farm/product/${item.id}`)}}>View Details</button>
                        }
                        </div>
                </div>
                </Link>
              )
            })}
         </div>
         </div>
         {/**************************FEATURED PRODUCTS********************** */}
         <div className='popular-brand w-100 mb-5 leave'>
            <div className='top-brand d-flex align-items-center justify-content-between'>
                <h1>Chemical Products</h1>
                <a href='#top' className='popular-a'>View All</a>
            </div>
            <div className='brands w-100 mt-4 d-flex'>
              { popularBrands.map(item => {
              return(
                <Link style={{ textDecoration: 'none'}} to={`mechanical/product/${item.id}`}>
                  <div className='brand-card text-center col-sm-3' key={item.id}>
                      <div className='brands-img'>
                        <img src={item.image} alt='...' className='brands-image'/>
                      </div>
                      <div className='brand-inner'>
                          <h3 className=''>{item.name}</h3>
                          <div className='automobile d-flex align-items-center'>
                            <Auto />
                            <h4 className=''>The Madisson</h4>
                          </div>
                          <div className='automobile d-flex align-items-center'>
                            <Settings />
                            <h4 className=''>7 million</h4>
                          </div>
                          <div className='automobile d-flex align-items-center'>
                            <Bike />
                            <h4 className=''>$900 per container</h4>
                          </div>
                          <button className='btn details' onClick={() => { navigate(`mechanical/product/${item.id}`)}}>View Product Details</button>
                      </div>
                  </div>
                </Link>
                    )
                  })}
            </div>
         </div>
         </div>

         <div className='top-deals mt-4 owambe'>
            <div className='link d-flex align-items-center justify-content-between'>
            <h1 className='h1'>Featured Products</h1>
                <a href='#top' className='view-all'>View All</a>
            </div>
         <div className='deal-card w-100 mt-4'>
           { featured.map(item => {
            return(
              <Link style={{ textDecoration: 'none'}}>
                <div className='mobile-card m-3' key={item.id}>
                    <p className='discount'>-{item.cut}%</p>
                    <img src={item.image} alt='...' className='icon'/>
                    <h3>{item.name}</h3>
                    { window.innerWidth <= 600 ? 
                      <p className='desc'>{item.description.substring(0, 40) + '...'}</p>
                      :<p className='desc'>{item.description}</p> 
                    }
                    <div className='price-container d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center'>
                        <p className='price'>₹{item.dPrice}</p>
                        <p className='price'>₹{item.realPrice}</p>
                      </div>
                      { window.innerWidth <= 600 ? 
                          <button className='btn details'>View</button>
                          : <button className='btn details'>View Details</button>
                      }
                    </div>
                </div>
              </Link>
            )
           })}
         </div>
         </div>
        </main>
    )
}

export default Home
