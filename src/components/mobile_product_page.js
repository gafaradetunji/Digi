import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'
import { Link } from 'react-router-dom'
import Search from './mobile_search_icon'

const MobileProduct = () => {
    return(
        <main>
            <div className='d-flex align-items-center justify-content-between ruby'>
                <div className='mobile-elect d-flex align-items-center'>
                    <Link to={`/electrical`} className='mob-anch'>
                        <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                    </Link>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" style={{ textDecoration: 'none', color: 'grey'}} to={`/electrical`}>
                            Electrical Products
                        </Link>
                        {/* <Typography color="text.primary" className='topography'>Others</Typography> */}
                    </Breadcrumbs>
                </div>
                <div className='auth-nav mobile_auth'>
                <img src={require('../images/cart.jpg')} alt='' className='nav-cart'/>
                <img src={require('../images/auth-user.jpg')} alt='' className='user-nav'/>
                </div>
          </div>
          <Search />
        </main>
    )
}
export default MobileProduct
