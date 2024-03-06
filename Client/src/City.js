import React from 'react'
import './City.css'

const City = () => {
  return (
    <div>
        <div className='container w-75 mt-5 d-flex justify-content-center align-items-center flex-column '>
            <h2 >Popular location in India</h2>
           <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato 
            covers it all. Explore menus, and millions of restaurant photos and reviews from users
             just like you, to find your next great meal.</p>
        </div>

        <section>
          <div className='container w-75 mt-5 d-flex justify-content-center align-items-center'>
            <div className='row'>
                
             <div className='col-lg-4'>

                     <div className='card1'>
                        <h5>Agra Restaurants</h5>
                    
                    </div> 
                </div>
                <div className='col-lg-4'>
                    <div className='card1'>
                    <h5>Bhopal Restaurants</h5>

                    
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card1'>
                    <h5>Indore Restaurants</h5>

                    
                    </div>
                </div>


            </div>

          </div>
        </section>
    </div>
  )
}

export default City