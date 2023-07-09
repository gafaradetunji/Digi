import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link'
import { topDeals } from './home'
import Categories from './categories'
import { Link, useNavigate } from 'react-router-dom';
import SimilarProduct from './similarProduct';
import ElectricMobile from './electrical-mobile';

const Electrical = () => {
const navigate = useNavigate()


    return(
        <main>
            <ElectricMobile />
          <div className='row'>
          <div className='categories row'>
            <Categories />
            <div className='all-view col-xl-8'>
                <Link to={`/`} className='back-track d-flex align-items-center justify-content-between'>
                    <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                    <p>Back</p>
                </Link>
                <div className='indicators d-flex align-items-center justify-content-between mt-4 mb-5'>
                    <Breadcrumbs aria-label="breadcrumb" separator="›">
                        <Link underline="hover" style={{ textDecoration: 'none', color: 'grey'}} href="/">
                        Electrical Products
                        </Link>
                        <Typography color="text.primary" className='topography'>Others</Typography>
                    </Breadcrumbs>
                    <select>
                        <option>Sort by: Newest</option>
                        <option>Sort by: Date</option>
                    </select>
                </div>
                <div className='electric-card w-100 mt-4'>
                    { topDeals.map(item => {
                        return(
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
                                    <button className='btn details' onClick={() => { navigate(`product/${item.id}`)}}>View</button>
                                    : <button className='btn details' onClick={() => { navigate(`product/${item.id}`)}}>View Details</button>
                                }
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
                </div>
          <div className='w-100 may-like'>
            <div className='w-100 h1-a'>
                <h1>You may also like</h1>
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
                <SimilarProduct />
            </div>
        </main>
    )
}

export default Electrical
