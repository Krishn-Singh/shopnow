import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../Assests/images/fwd/img1.webp'
import img2 from '../Assests/images/fwd/img2.jpeg'
import img3 from '../Assests/images/fwd/img3.jpeg'
import img4 from '../Assests/images/fwd/img4.jpeg'
import img5 from '../Assests/images/fwd/img5.jpeg'
import img6 from '../Assests/images/fwd/img6.png'

const ImageCarousel = () => {
  return (
    <div className='flex py-2' >
      <img src={img1} alt="Image 1" />
      <img src={img2} alt="Image 3" />
      <img src={img3} alt="Image 1" />
      <img src={img4} alt="Image 1" />
      <img src={img5} alt="Image 2" />
      <img src={img6} alt="Image 3" />
    </div>
  )
}

export default ImageCarousel