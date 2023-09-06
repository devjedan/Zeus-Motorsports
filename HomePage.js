import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage-content">
        <h1 className="homepage-title">Zeus Motorsports</h1>
        <p className="homepage-description">Experience the Thrill of Speed and Efficiency</p>
        <div className="car-image" />
        <div className="homepage-details">
          <div className="detail-item">
            <i className="fas fa-tachometer-alt"></i>
            <div className="detail-text">
              <span className="detail-label">Top Speed</span>
              <span className="detail-value">250 mph</span>
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-battery-half"></i>
            <div className="detail-text">
              <span className="detail-label">Electric Range</span>
              <span className="detail-value">150 miles</span>
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-car"></i>
            <div className="detail-text">
              <span className="detail-label">Engine</span>
              <span className="detail-value">V8 Twin-Turbo Hybrid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
