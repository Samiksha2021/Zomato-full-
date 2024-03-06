import React from 'react'
import './Card.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Card = () => {
  return (
    <div className='container w-75 mt-5'>

        <div className='row'>
            <div className=' col-lg-4'>
                <div className='img-card'>
                    <img src='https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

                    <h4>Order online</h4>
                    <p>Stay home and order to your doorstep</p>

                </div>
            </div>

            <div className='col-lg-4'>
                <div className='img-card'>
                    <img src='https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGluaW5nfGVufDB8fDB8fHww'/>
                    
                    <h4>Dining</h4>
                    <p>View the city's favourite dining venues</p>

                </div>
            </div>

            <div className='col-lg-4'>
                <div className='img-card'>
                    <img src='https://plus.unsplash.com/premium_photo-1661288463906-884f3550b103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHRsaWZlJTIwYW5kJTIwY2x1YnN8ZW58MHx8MHx8fDA%3D'/>
                    
                    <h4>Nightlife and clubs</h4>
                    <p>Explore the city's top nightlife outlets</p>

                </div>
            </div>  

        </div>

    </div>
  )
}

export default Card