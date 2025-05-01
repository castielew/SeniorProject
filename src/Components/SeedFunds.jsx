import React from 'react';
import img1 from "../images/h1.png"
import img2 from "../images/h2.png"
import img3 from "../images/h3.png"
import img4 from "../images/h4.png"
import img5 from "../images/h5.png"


function SeedFunds() {
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-medium text-dark">Seed Funds</h5>
          <a href="#" className="text-decoration-none fw-bold" style={{ color: '#13897D' }}>
            All Funds
          </a>
        </div>

        <p className="text-muted  mb-4" style={{ maxWidth: '100%', fontSize: '14px' }}>
          Our seed funds provide the initial funding, and at times go beyond to adopt a campaign entirely. 
          Seed funds are established and managed by individuals and organizations who care about education and conflict-impacted youth.
        </p>

        <div className="container">
  <div className="d-flex flex-wrap justify-content-center gap-4">
    {[
      { id: 1, name: "Ammar Al Shami Fund", imageUrl: img1},
      { id: 2, name: "Estebar and Wajih Barazi Fund", imageUrl: img2 },
      { id: 3, name: "Project Turquoise Fund", imageUrl: img3 },
      { id: 4, name: "Abdullatif Chakaki Fund", imageUrl: img4 },
      { id: 5, name: "The Cosmic Centaurs Fund", imageUrl: img5 },
    ].map((item) => (
      <div key={item.id} className="fund-card-container text-center">
        <div className="fund-card position-relative">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="img-fluid rounded"
            style={{ width: '141px', height: '141px', objectFit: 'cover' }}
          />
          <div className="overlay d-flex align-items-end justify-content-center p-2">
            <p className="text-white mb-1 fund-label">{item.name}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}

export default SeedFunds;
