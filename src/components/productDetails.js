import { Link, useParams } from 'react-router-dom'
import { topDeals } from './home'
import { useRef, useState } from 'react';
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SimilarProduct from './similarProduct';
import MobileProduct from './mobile_product_page';

const ProductPage = () => {
    const { id } = useParams()
    const sliderRef = useRef(null);
    const [ active, setActive ] = useState(true)
    const [ isActive, setIsActive ] = useState(false)

    const Product = () => {
        setActive(true)
        setIsActive(false)
        console.log('clicked')
    }
    const Company = () => {
        setActive(false)
        setIsActive(true)
        console.log('clicked')
    }
    const product = topDeals.find((p) => p.id === parseInt(id));
    console.log('PRODUCT',product)

    if (!product) {
        return <div>Product not found</div>;
    }


  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  }

  const settings = {
    dots: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
    return(
        <main className='dynamic-render'>
           <MobileProduct />
            <Link to={`/electrical`} className='back-track d-flex align-items-center'>
                <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                <p>Back</p>
            </Link>
            <Breadcrumbs aria-label="breadcrumb" separator="›" className='bread'>
                <Link underline="hover" className='mob-anch' to="/">
                Electrical Products
                </Link>
                <Link underline="hover" className='mob-anch' to="/">
                others
                </Link>
                <Typography color="text.primary">{product.name}</Typography>
            </Breadcrumbs>
            
          <div className='arrow'>
            <Slider
              ref={sliderRef} 
              {...settings}
              className='dynamo'
            >
                <div className='dynamic-img'>
                    <img src={product.image} alt='' />
                </div>
                <div className='dynamic-img'>
                    <img src={product.image} alt='' />
                </div>
                <div className='dynamic-img'>
                    <img src={product.image} alt='' />
                </div>
            </Slider>
            <div className='carousel-arrow'>
              <button className='arrow-but backward' onClick={previous}>
                <span class="material-symbols-outlined main-arrow">
                    arrow_back_ios_new
                </span>
              </button>
              <button className='arrow-but forward' onClick={next}>
                <span class="material-symbols-outlined main-arrow">
                    arrow_forward_ios
                  </span>
              </button>
          </div>
          </div>
          <div className='dynamic-fav d-flex align-items-center justify-content-between'>
            <div className='left-images'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='dynamo-icon'>
              <Link to='#top' className='dynamo-anchor'>
                <span class="material-symbols-outlined icon">
                    favorite
                </span>
                Favorite
              </Link>
              <Link to='#top' className='dynamo-anchor'>
                <span class="material-symbols-outlined icon">
                    share
                </span>
                Share
              </Link>
              <Link to='#top' className='dynamo-anchor'>
                <span class="material-symbols-outlined icon">
                    flag
                </span>
                Flag
              </Link>
            </div>
          </div>
          <div className='prod-details'>
            <div className='prod-anchor'>
              <button className='' onClick={Product}>Product Details</button>
              <button className='' onClick={Company}>Company Profile</button>
            </div>
            <div className={`all-in-all row ${ active ? 'show active': 'collapse'}`}>
              <div className='about-product col-sm-8'>
                <h2>About the Product</h2>
                <p className='dynamo-about'>A convenient device that allows you to control your bed's functions with ease. With power on/off, temperature control, massage settings, and lighting control, this small handheld remote or wall-mounted switch is perfect for adjustable and traditional beds. It even has a timer function to turn off settings automatically. Experience a more streamlined and convenient bedtime routine with our Bed Switch for Adults.</p>
                <div className='about-details'>
                  <h3>Details</h3>
                  <p>Product Name: <span>Bed Switch For Aduts</span></p>
                  <p>Manufacturer: <span>GJR</span></p>
                  <p>Product Size: <span>2’’ - 23” adjustable</span></p>
                  <p>Usage: <span>Indoor</span></p>
                  <p>Price: <span>$200</span>(1 - 2000) (&gt; 2000 negotiable)</p>
                </div>
                <div className='disclaimer'>
                  <h4>Disclaimer !</h4>
                  <p>Lorem Iposium et Re seum Kobr toske.</p>
                  <button className='manufacturer'>Contact the manufacturer</button>
                </div>
              </div>
              <div className='specifications col-sm-4'>
                <h2>Specifications</h2>
                <p>Rating: <span> 240v/13amps</span></p>
                <p>Life Span: <span> 30 years</span></p>
                <p>Temperarture: <span> 21f working condition</span></p>
                <p>Color: <span> Variant</span></p>
                <p>Feel: <span> Woody Rough</span></p>
                <p>Weight: <span> 0.34dcb</span></p>
                <p>Flexibility: <span> No</span></p>
              </div>
            </div>
            <div className={`about-product col-sm-8 ${ isActive ? 'show': 'collapse'}`}>
              <h2>About</h2>
              <div className='about-details'>
                <p>KMG is an international blabla bla, this small handheld remote or wall-mounted switch is perfect for adjustable and traditional beds. It even has a timer function to turn off settings automatically. Experience a more streamlined and convenient bedtime routine with our Bed Switch for Adults.</p>
                <p><span>Company size:</span></p>
                <p><span>Location: </span>Beign Young, China</p>
                <p><span>Logistic service: </span>Yes</p>
                <p><span>Whare house: </span>3</p>
              </div>
              <div className='disclaimer'>
                <h4>Disclaimer !</h4>
                <p>Lorem Iposium et Re seum Kobr toske.</p>
                <button className='manufacturer'>Contact the manufacturer</button>
              </div>
            </div>
          </div>
          <SimilarProduct />
        </main>
    )
}

export default ProductPage
