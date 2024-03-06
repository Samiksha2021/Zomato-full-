import React from 'react'
const zomatologo='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'

const Footer = () => {
  return (
    <div className='mt-5'>
        <div className='container w-75 '>
            <div className='d-flex justify-content-between align-items-center'>
               <div>
                <img style={{width:'8rem'}} src={zomatologo}/>
               </div>
               <div>
                <button>Country</button>
                <button>Language</button>
               </div>
            </div>
        </div>

        <div className='text  container w-75 mt-5 d-flex justify-content-between align-items-center' >
            <div> <h5>About Zomato</h5>  <p>Who we are</p> <p>Blog</p> <p>Contact us</p></div>
            <div> <h5>Zomaverse</h5>  <p>Zomato</p> <p>Blinkit</p> <p>Zomaland</p></div>
            <div> <h5>For Restaurants</h5>  <p>Partner with us</p> <p>Apps for you</p> <h5>For Enterprises</h5> <p>Zomato for enterprise</p></div>
            <div> <h5>Learn more</h5>  <p>Privacy</p> <p>Security</p> <p>Terms</p><p>Sitemap</p></div>
            <div> <h5>Social Link</h5>  <p>instagram</p> <p>fb</p> <p>app</p></div>
        </div>
    </div>

  )
}

export default Footer