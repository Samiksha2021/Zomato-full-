import React, { useState, useEffect } from 'react'
import './App.css'
import bg from './Images/BackGround.png'
import logo from './Images/Logo.png'
import { NavLink, json } from 'react-router-dom'
import Card from './Card.js'
import City from './City.js'
import Footer from './Footer.jsx'


const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {

    let data = localStorage.getItem('userData')
    console.log(data, "dataaaaaaaa");
    let newData = JSON.parse(data)
    console.log(newData, "newData");

    setData(newData)
  }, []);

  let remove = () => {
    localStorage.clear('userData')
    setData(null)
  }


  return (
    <div>
      <div className='parent'>
        <img className='img' src={bg} />

        
        <div className='navbar'   id='navbar'>
          <div className='navbar_left'>
            <span className='icon_1'><NavLink to='/view' className='color-b'>View Food</NavLink></span>
            <span className='icon_2'><NavLink to='/partner-with-us' className='color-b'>Add restaurant</NavLink></span>
          </div>

          <div className='navbar_right'>
      
          <span className='icon_3'><NavLink to='/login' className='color-b'>Login</NavLink></span>
                    <span className='icon_4'><NavLink to='/signup' className='color-b'>Sign up</NavLink></span>
            {/* {
               data ? (
               <>   <p> {data.userInfo.name} </p>
                <span onClick={remove} className='floar-right2'> <NavLink className='color-b'>Logout</NavLink> </span>

              </>

              ) :
                (
                  <>
                    <span className='icon_3'><NavLink to='/login' className='color-b'>Login</NavLink></span>
                    <span className='icon_4'><NavLink to='/signup' className='color-b'>Sign up</NavLink></span>
                  </>
                )
            } */}

          </div>
        </div>

        <div className='logo'>
          <img src={logo} />
        </div>


        <div className='input-search'>
          <h3 style={{ color: "white" }} >Discover the best food & drinks in India </h3>

          <div className='input'>
            <select name="" id="">
              <option value="Chennai">Chennai</option>
              <option value="Jaipur">Jaipur</option>
              <option selected value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
            |
            <input type='text' placeholder='Search for restaurant,cuisine or dish' />
          </div>
        </div>
        <Card />


        <section>
          <City />
        </section>


        <footer>
          <Footer />
        </footer>
      </div>

    </div>
  )
}

export default Home