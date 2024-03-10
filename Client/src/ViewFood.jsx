import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ViewFood.css'; // Import the CSS file

const ViewFood = () => {
  const navigate = useNavigate();
  const { restroId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function showProduct() {

      const restaurant = await axios.get(`http://localhost:4000/api/restro/${restroId}`);
      // console.log(restaurant.data,"restrooooo");
      setRestaurant(restaurant.data)
      const product = await axios.get('http://localhost:4000/api/product');
      console.log(product.data, "rrrrr");
      setProducts(product.data)


    }

    showProduct()



  }, []);

  const addProduct = () => {
    navigate(`/view/${restroId}/addProduct`);
  };
  return (
    <div className='container'>
      <button onClick={addProduct}>Add Product</button>

      <div>
        <img id='restroImage' src={restaurant.image} />
        <h4>  {restaurant.name}</h4>
      </div>
      <div className='row'>
        {
          products.map((data) => {
            return (<>
              <div id='product' className='col-lg-4'>
                <img id='productImage' src={data.image} />
                <h2>   {data.name}</h2>
                <h2>  {data.price}</h2>
              </div>
            </>)
          })
        }
      </div>


    </div>
  );
};

export default ViewFood;