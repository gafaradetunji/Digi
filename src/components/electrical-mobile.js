// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { topDeals } from './home'
import { Link, useNavigate } from 'react-router-dom';
import Search from './mobile_search_icon';

const ElectricMobile = () => {
    const navigate = useNavigate()
    return(
        <div className='electric-mobile'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='mobile-elect d-flex align-items-center'>
                <Link to={`/`} className='mob-anch'>
                    <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                </Link>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" style={{ textDecoration: 'none', color: '#000'}} to="/">
                    Electrical Products
                    </Link>
                    {/* <Typography color="text.primary" className='topography'>Others</Typography> */}
                </Breadcrumbs>
            </div>
            <div className='auth-nav'>
              <img src={require('../images/cart.jpg')} alt='' className='nav-cart'/>
              <img src={require('../images/auth-user.jpg')} alt='' className='user-nav'/>
            </div>
          </div>
          <Search />
          <div className='d-flex align-items-center justify-content-between'>
            <div></div>
            <select className='select-mobile'>
                <option>Sort by: Newest</option>
                <option>Sort by: Date</option>
            </select>
          </div>
                <div className='electric-card w-100 mt-4'>
                    { topDeals.map(item => {
                        return(
                        <div className='mobile-card' key={item.id}>
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
    )
}
export default ElectricMobile
