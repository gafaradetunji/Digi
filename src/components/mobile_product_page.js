import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

const MobileProduct = () => {
    return(
        <main>
            <div className='d-flex align-items-center justify-content-between ruby'>
                <div className='mobile-elect d-flex align-items-center'>
                    <Link to={`/electrical`} className='mob-anch'>
                        <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                    </Link>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to={`/electrical`}>
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
          <form className='mobile-search mobile-prod'>
            <img src={require('../images/search.jpg')} alt='' className='nav-search'/> 
            <input type='text' className='input-nav' placeholder='Search Digistore'/>
          </form>
        </main>
    )
}
export default MobileProduct
