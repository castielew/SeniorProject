import React from "react";
import '../Css/SedFund.css'
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const funds = [
  { name: "Ammar Al Shami Fund", image: "blob300720191010534375.jpg" },
  { name: "Estebar and Wajih Barazi Fund", image: "blob270820190113280910.jpg" },
  { name: "Project Turquoise Fund", image: "blob090220211212133042.jpg" },
  { name: "Abdullatif Chakaki Fund", image: "blob260720200820331639.jpg" },
  { name: "the Cosmic Centaurs Fund", image: "blob120420210113575078.jpg" }
];

export default function Funds() {
  return (

    <section className="seed-funds-section py-5">
    <NavBar></NavBar>
      <div className="container">
        <h2 className="text-center fw-bold mb-3">Seed Funds</h2>
        <p className="text-center mb-4">
          Our seed funds provide the initial funding, and at times go beyond to adopt a campaign entirely.
          Seed funds are established by individuals and organizations who care about education and conflict impacted youth.
        </p>

        {/* Search Bar */}
        <div className="search-bar mb-5 d-flex justify-content-center position-relative">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search..."
          />
          <img src="/search-icon.png" alt="Search" className="search-icon" />
        </div>

        {/* Fund Cards */}
        <div className="row g-3 justify-content-center">
          {funds.map((fund, index) => (
            <div className="col-6 col-sm-4 col-md-2" key={index}>
              <div className="card fund-card text-white text-center">
              <img
                src={`/path/to/images/${fund.image}`}  // Update with the correct relative path to your images
                className="card-img"
                alt={fund.name}
              />
                <div className="card-img-overlay d-flex align-items-end justify-content-center p-2 bg-overlay">
                  <p className="card-text fw-semibold">{fund.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-teal fw-bold px-4 py-2">Load more</button>
        </div>
      </div>
<Footer></Footer>
    </section>
  );
}