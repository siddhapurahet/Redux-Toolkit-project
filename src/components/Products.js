// Products API --> https://fakestoreapi.com/products  will be using this api to load the products data
//To make an API, will be using useEffect hook. 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react';

const Products = () => {

    const[products, getproducts] = useState([]);

    useEffect(() => {
        //calling API, to hit API we can use axios or fetch, here we have used fetch.
        fetch('https://fakestoreapi.com/products')
        .then(data  => data.json())  //after fetching data, convert it to json.
        .then(result => getproducts(result));  //then store the result into useState so that we can use it in the product component to display.
    }, []);

    const card = products.map(singleProduct => {
        return (
            <div className='col-md-3' style={{marginBottom:"10px"}}>
                <Card key={singleProduct.id} className="h-100">
                    <div className='text-center'>
                        <Card.Img variant="top" src={singleProduct.image} style={{width:"100px", height:"130px"}}/>
                    </div>
                    <Card.Body>
                        <Card.Title>{singleProduct.title}</Card.Title>
                        <Card.Text>
                            Rs. : {singleProduct.price}
                        </Card.Text>
                        <Card.Footer style={{background:"white", marginBottom:"1px"}}>
                            <Button variant="primary">add to Cart</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return (
        <>
            <h1>Product Dashboard</h1>
            {/* {JSON.stringify(products)}; */}
            <div className="row">
                {card}
            </div>
        </>
    )
}

export default Products;