import React from 'react'
import { Link } from 'react-router-dom';

const Subtitle = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,  
      behavior: 'smooth'  
    });}
  return (
    <div className='mt-5 ms-4 me-5'>
    <div className='d-flex justify-content-between'>
        <h4>Category</h4>
       
       <Link to='/allcategory' >
       <button onClick={ scrollToTop} type="button" class="btn btn-outline-secondary">more</button>
       </Link> 
        </div>
      
    </div>
  )
}

export default Subtitle
