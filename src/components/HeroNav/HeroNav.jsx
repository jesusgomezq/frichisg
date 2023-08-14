import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel.css'

export const HeroNav = () => {
  return (
    <div className='Carousel'>
    <Carousel className='container'>
      <Carousel.Item className='container-carousel'>
        <img height="700px" className="d-block w-50"  src="https://static.wikia.nocookie.net/callofduty/images/b/b4/Ghost_BattlePass_CoDWebsite_MW.jpg/revision/latest?cb=20200208015430" alt="imagen" />  
      </Carousel.Item>
      <Carousel.Item>
        <img height="700px" className="d-block  w-50"  src="https://mp1st.com/wp-content/uploads/2019/06/call-of-duty-modern-warfare-2019.jpg" alt="imagen" /> 
      </Carousel.Item>
      <Carousel.Item>
        <img height="700px" className="d-block w-50"  src="https://static.wikia.nocookie.net/callofduty/images/b/b4/Ghost_BattlePass_CoDWebsite_MW.jpg/revision/latest?cb=20200208015430" alt="imagen" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
