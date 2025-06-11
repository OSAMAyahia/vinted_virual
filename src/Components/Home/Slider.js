import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import slider1 from './file_00000000535461f4b332c3fdb92b6bed (1).png';
import slider4 from './file_000000002f4061f49b721caf533d0f64 (3).png';
import slider6 from './file_0000000087486246955bd3e31d8d6d4d.png';
 
const Slider = () => {
  // استخدام useEffect لتفعيل الكاروسيل عند تحميل الصفحة
  useEffect(() => {
    // Check if Bootstrap is available
    if (window.bootstrap) {
      const carouselElement = document.querySelector('#carouselExampleCaptions');
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // التغيير التلقائي كل 3 ثوانٍ
        ride: 'carousel', // بدء التشغيل التلقائي
      });
    }
  }, []);

  return (
    <div className="slider-section position-relative" style={{ background: "#95cad8" }}>
      {/* Card Component positioned on the left side of the slider */}
      <div 
        className="position-absolute" 
        style={{ 
          left: "15%", // Spacing from left edge (15% as requested)
          top: "50%", 
          transform: "translateY(-50%)", 
          zIndex: 10, 
          width: "25%", // Card width
          minWidth: "250px" // Minimum width to ensure readability
        }}
      >
        <div className="card shadow">
          <div className="card-body text-center">
            <h3 className="card-title mb-3">Ready to declutter your closet?</h3>
            <p className="card-text mb-4">Turn your unused clothing into cash. List your items easily and start selling today.</p>
            <Link to="/admin/addproduct" className="btn btn-primary btn-lg mb-3" style={{ backgroundColor: "#008080", borderColor: "#008080" }}>Sell now</Link>
            <div className="mt-2">
              <Link to="#" className="text-decoration-none" style={{ color: "#008080" }}>Learn how it works</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Component */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} style={{ width: "100%", height: "400px", objectFit: "cover" }} alt="Slide 1" />

          </div>
          
          <div className="carousel-item">
            <img src={slider6} style={{ width: "100%", height: "400px", objectFit: "cover" }} alt="Slide 2" />
           
          </div>
          
          <div className="carousel-item">
            <img src={slider4} style={{ width: "100%", height: "400px", objectFit: "cover" }} alt="Slide 3" />
        
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;