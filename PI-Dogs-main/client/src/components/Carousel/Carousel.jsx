import React from 'react'
import img1 from "../../images/corgi.jpg"
import img2 from "../../images/puppy.jpg"
import img3 from "../../images/view.jpg"
import img4 from "../../images/rott.jpg"
import img5 from "../../images/dash.jpg"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import style from "../Carousel/Carousel.module.css"
const Carrousel = () => {
  return (
    <div className={style.carousel}>
    <Carousel
      showThumbs={false}
      showArrows={true}
      showStatus={true}
      showIndicators={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay = {true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
      emulateTouch={true}
      autoFocus={false}>
      <div>
        <img src={img1} alt='logo' height={"300px"}/>
      </div>
      <div>
        <img src={img2} alt='logoS'height={"300px"}/>
      </div>
      <div>
        <img src={img3} alt='logoS' height={"300px"}/>
      </div>
      <div>
        <img src={img4} alt='logoS' height={"300px"}/>
      </div>
      <div>
        <img src={img5} alt='logoS' height={"300px"}/>
      </div>
    </Carousel>
  </div>
  )
}

export default Carrousel