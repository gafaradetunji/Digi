import { similar } from './home'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const SimilarProduct = () => {
    return(
        <div className='popular-brand w-100 m-5 similar-product'>
                    <div className='top-brand w-100 d-flex mb-4 align-items-center justify-content-between'>
                        <h1>Similar Products</h1>
                        <a href='#top' style={{ color: '#df0000', textDecoration: 'none'}}>View All</a>
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
    )
}
export default SimilarProduct
