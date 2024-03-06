  import React, { useState } from 'react';
// import './AddResto.css'; 
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl ='https://yjnyqgwkpeovsywdvgts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqbnlxZ3drcGVvdnN5d2R2Z3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyOTg3NDUsImV4cCI6MjAyNDg3NDc0NX0.XPyoQrbJL4Wx04M7Xp3GiijDa7vEBNsuH0XdZpqnlfg';
const supabase = createClient(supabaseUrl, supabaseKey);
const AddRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    address: '',
    description: '',
    image: '',
    contactNo: '',
    openingTime: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setRestaurantData({ ...restaurantData, image: file });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);
      if (error) {
        throw error;
      }

      // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg
      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/restaurant_images/${restaurantData.image.name}`;
      console.log(imageUrl,"blocking zzzzzzz");
  
      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:4000/api/restro', { ...restaurantData, image:imageUrl });
      if (response.ok) {
        alert('Restaurant added successfully');
        // Reset form fields
        setRestaurantData({
          name: '',
          address: '',
          description: '',
          image: '',
          contactNo: '',
          openingTime: ''
        });
      } else {
        alert('Failed to add restaurant');
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Failed to add restaurant');
    }
  };

  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={restaurantData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={restaurantData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={restaurantData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </div>
        <div className="form-group">
          <label>Contact No:</label>
          <input type="text" name="contactNo" value={restaurantData.contactNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Opening Time:</label>
          <input type="datetime-local" name="openingTime" value={restaurantData.openingTime} onChange={handleChange} />
        </div>
        <button type="submit">Add Restaurant</button>
        {/* <img   src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg'/> */}
        {/* <img  src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/taro-ohtani-TWJnM9MQlt8-unsplash.jpg'/> */}
      </form>
    </div>
  );
};

export default AddRestaurant;
// const { data, error } = await supabase.storage.from('zomato').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);