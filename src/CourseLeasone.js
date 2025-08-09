
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaPlayCircle, FaClock, FaUsers } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export default function CoursePage() {

    
  return (
    <div style={{ backgroundColor: "#f5f5f5", fontFamily: "sans-serif" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Logo" height="24" />
          </a>
       <div className="d-flex mx-auto align-items-center" style={{ backgroundColor: "#f5f5f5", borderRadius: "29px", paddingLeft: "20px", paddingRight: "10px", height: "48px", width: "450px", border: "1px solid #ccc", opacity: 1 }}>
            <input
              className="form-control border-0"
              type="search"
              placeholder="What do you want to learn today?"
              aria-label="Search"
              style={{ backgroundColor: "#f5f5f5", borderRadius: "29px", height: "100%" }}
            />
            <button className="btn btn-success d-flex align-items-center justify-content-center" style={{ borderRadius: "50%", width: "36px", height: "36px", marginLeft: "-12px" }}>
              <BiSearch size={18} />
            </button>
          </div>
          <div className="d-flex align-items-center gap-4">
            <a className="nav-link text-dark" href="#">Home</a>
            <a className="nav-link text-dark" href="#">Services</a>
            <a className="nav-link text-dark" href="#">Contact Us</a>
            <a className="nav-link text-dark" href="#">Sign in</a>
            <button className="btn px-4 shadow" style={{ backgroundColor: "#28c76f", color: "white", borderRadius: 0 }}>Join for Free</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-lg-8">
            <img
              src="../../d8e65cc458445ba79e6c1b7a61759fe232ef0457.jpg"
              alt="Course"
              className="img-fluid"
              style={{ height: "503px", width: "852px", borderRadius: "10px", objectFit: "cover" }}
            />
            <div className="mt-3">
              <div className="d-flex align-items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < 4 ? '#f1c40f' : '#ddd'} size={16} />
                ))}
                <span className="text-dark ms-2">(4.7)</span>
              </div>
              <h2 className="fw-bold text-dark mt-2">
                Web Development Fully Complete Guideline
              </h2>
              <div className="d-flex gap-4 text-muted small mt-2 border-bottom pb-3">
                <div className="d-flex align-items-center gap-1">
                  <FaPlayCircle className="text-success" /> Lesson 10
                </div>
                <div className="d-flex align-items-center gap-1">
                  <FaClock className="text-success" /> 9:00AM - 01:00 PM
                </div>
                <div className="d-flex align-items-center gap-1">
                  <FaUsers className="text-success" /> Students 20+
                </div>
              </div>

              {/* Tabs */}
            <ul className="nav nav-pills mt-4">
                {['Overview', 'Curriculum', 'Instructor', 'Reviews'].map((tab, index) => (
                  <li className="nav-item me-2" key={index}>
                    <button
                      className={`btn ${index === 0 ? 'text-white' : ''} px-4 py-2`}
                      style={{
                        borderRadius: 0,
                        backgroundColor: index === 0 ? '#28c76f' : '#F2F2F2',
                        color: index === 0 ? '#fff' : '#000',
                        border: '1px solid #ccc'
                      }}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <h5 className="fw-bold">COURSE DESCRIPTION</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>

                <h5 className="fw-bold">WHAT WILL I LEARN FROM THIS COURSE?</h5>
                <p className="text-muted">
                  Hincas sus. Vestibulum sollicitudin varius morbi eu dignissim. Sed quis placerat odio.
                  Nulla quam neque, interdum nec fermentum bibendum...
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-4">
            <div className="card">
              <img src="../../5987a516830daf8d860f9fda89829f789260c7fe.jpg" className="card-img-top" alt="Students" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-muted mb-0">Course Fee</p>
                  <div className="d-flex align-items-center gap-2">
                    <del className="text-muted fs-6 mb-0">$120</del>
                    <span className="text-dark fw-bold">$60</span>
                  </div>
                </div>
                <p className="text-success small mb-3">30-Day Money-Back Guarantee</p>
                <button className="btn w-100 mb-3" style={{ backgroundColor: "#28c76f", color: "white", borderRadius: 0 }}>BUY NOW</button>

                <ul className="list-unstyled text-muted small mb-0">
                  <li className="mb-1"><strong>Duration:</strong> 4 Hours</li>
                  <li className="mb-1"><strong>Enrolled:</strong> 100</li>
                  <li className="mb-1"><strong>Lectures:</strong> 80</li>
                  <li className="mb-1"><strong>Skill Level:</strong> Basic</li>
                  <li className="mb-1"><strong>Optional:</strong> Monday–Friday</li>
                  <li className="mb-1"><strong>Language:</strong> English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white pt-5 pb-3">
        <div className="container">
          <div className="row text-start">
            <div className="col-md-3 mb-4">
              <h6 className="mb-3">Product</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-light text-decoration-none">Email Flow</a></li>
                <li><a href="#" className="text-light text-decoration-none">Free Tools</a></li>
                <li><a href="#" className="text-light text-decoration-none">App</a></li>
                <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="mb-3">Resources</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-light text-decoration-none">Our Agents</a></li>
                <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
                <li><a href="#" className="text-light text-decoration-none">Video Guides</a></li>
                <li><a href="#" className="text-light text-decoration-none">Free Trial</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="mb-3">Company</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-light text-decoration-none">Partnerships</a></li>
                <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
                <li><a href="#" className="text-light text-decoration-none">Terms of use</a></li>
                <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="mb-3">Get in touch</h6>
              <p className="small">
                You’ll find your next Marketing value you prefer.
              </p>
              <div className="d-flex gap-2 mt-3">
                {["facebook", "twitter", "instagram", "youtube"].map((icon, i) => (
                  <img
                    key={i}
                    src={`/${icon}.svg`}
                    alt={icon}
                    style={{ width: '35px', height: '35px', borderRadius: '50%' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-light mt-4 small">
          Copyright © 2023 shopa.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
