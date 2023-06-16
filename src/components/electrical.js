import { topDeals } from './home'
import { similar } from './home'
import { ReactComponent as Bike } from "../images/bike.svg"
import { ReactComponent as Auto } from "../images/auto.svg"
import { ReactComponent as Settings } from "../images/settings.svg"


const Electrical = () => {
    return(
        <main>
          <div className='row'>
            <div className="elect-categories col-sm-3">
                <h3>Categories</h3>
                <ul className="w-100">
                    <li className="w-100">
                      <a href='#' className="w-100 d-flex align-items-center jusytify-content-between">
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' />
                        <p className='m-2'>Electrical</p>
                        <img src={require('../images/Vector.jpg')} alt='...' />
                      </a>
                    </li>
                    <li className="w-100">
                      <a href='#' className="w-100 d-flex align-items-center jusytify-content-between">
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' />
                        <p className='m-2'>Mechanical</p>
                        <img src={require('../images/Vector.jpg')} alt='...' />
                      </a>
                    </li>
                    <li className="w-100">
                      <a href='#' className="w-100 d-flex align-items-center jusytify-content-between">
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' />
                        <p className='m-2'>Electrical</p>
                        <img src={require('../images/Vector.jpg')} alt='...' />
                      </a>
                    </li>
                    <li className="w-100">
                      <a href='#' className="w-100 d-flex align-items-center jusytify-content-between">
                        <img src={require('../images/electrical_services.jpg')} alt='icon living' />
                        <p className='m-2'>Electrical</p>
                        <img src={require('../images/Vector.jpg')} alt='...' />
                      </a>
                    </li>
                </ul>
            </div>
            <div className='all-view col-sm-9'>
                <a href='#' className='back-track d-flex align-items-center justify-content-between'>
                    <img src={require('../images/back-track.jpg')} alt='' className='back-img'/>
                    <p>Back</p>
                </a>
                <div className='indicators d-flex align-items-center justify-content-between'>
                    <div className='indi d-flex align-items-center justify-content-center'>
                        <span className='first'>Electrical Products</span>
                        <img src={require('../images/forward.jpg')} alt='' className='m-2'/>
                        <span className='second'>Others</span>
                    </div>
                    <select>
                        <option>Sort by: Newest</option>
                        <option>Sort by: Date</option>
                    </select>
                </div>
                <div className='deal-card w-100 text-center m-3 row'>
                    { topDeals.map(item => {
                        return(
                            <div className='card-container m-3 col-sm-3'>
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

                {/* **************SIMILAR PRODUCT ***************** */}
                <div className='popular-brand w-100 m-5'>
                    <div className='top-brand d-flex align-items-center justify-content-between'>
                        <h1>Similar Products</h1>
                        <a href='#'>View All</a>
                    </div>
                    <div className='similar d-flex align-items-center justify-content-between w-100 mt-4'>
                    { similar.map(item => {
                    return(
                        <div className='brand-card'>
                            <div className='brands-img p-4'>
                            <img src={item.image} alt='...' className='similar-image w-100'/>
                            </div>
                            <div className='brand-inner w-100 mt-3'>
                                <h3 className='mt-4'>{item.name}</h3>
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
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Electrical
