import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blog1img from "../assets/images/blog 1.jpg";
import blog2img from "../assets/images/blog 2.jpg";
import blog3img from "../assets/images/blog 3.jpg";
import {
  FaDraftingCompass,
  FaTools,
  FaShieldAlt,
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/services");
        setServices(res.data.data.slice(0, 4));
      } catch (err) {
        console.error("Home Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Home Owner",
      review:
        "Aman Kahar Construction ne mera sapno ka ghar bilkul waise hi banaya jaisa maine socha tha.",
    },
    {
      id: 2,
      name: "Sneha Patel",
      role: "Interior Designer",
      review:
        "Unka approach kaafi professional hai. Architecture design mein perfection dikhti hai.",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Business Man",
      review:
        "Safety standards aur material quality mein koi compromise nahi karte.",
    },
    {
      id: 4,
      name: "Vikram Shah",
      role: "Architect",
      review: "Great team work! Engineering solutions modern hain.",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        {/* Section 1: Hero */}
        <section className="section-1">
          <div className="hero">
            <div className="container-fluid">
              <div className="hero-content text-center">
                <span className="welcome-text fw-bold">
                  Welcome to Our Construction Hub
                </span>
                <h1 className="mt-3">
                  Building Your Dreams with Precision and Excellence
                </h1>
                <p className="lead mt-3 mx-auto">
                  Aman Kahar Construction provides top-tier engineering
                  solutions.
                </p>
                <div className="hero-btns d-flex justify-content-center gap-3 mt-4">
                  <Link to="/contact" className="btn btn-contact">
                    Contact Now
                  </Link>

                  <Link
                    to="/projects"
                    className="btn btn-projects text-decoration-none"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About Us */}
        <section className="section-2 py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-6">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
                  alt="About"
                  className="img-fluid rounded-4 shadow-lg w-100"
                />
              </div>
              <div className="col-md-6">
                <div className="about-content text-center text-md-start">
                  <span className="about-badge text-uppercase fw-bold">
                    About Us
                  </span>
                  <h2 className="mt-2 mb-4 fw-bold">
                    Crafting structures that last a lifetime
                  </h2>
                  <p>
                    Building enduring structures requires advanced materials and
                    resilient design.
                  </p>
                  <button className="btn btn-primary px-5 py-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section className="section-3 py-5 bg-light">
          <div className="container-fluid px-md-5">
            <div className="section-header text-center mb-5">
              <span>Our Services</span>
              <h2 className="mt-2 fw-bold">Our Construction Services</h2>
            </div>
            <div className="row g-4">
              {loading ? (
                <div className="col-12 text-center py-5">
                  <div className="spinner-border text-primary"></div>
                </div>
              ) : (
                services.map((service) => (
                  <div className="col-md-3" key={service.id}>
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`http://localhost:8000/storage/${service.image}`}
                          alt={service.title}
                        />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{service.title}</h3>
                        </div>
                        <div className="service-content">
                          <p>{service.short_desc}</p>
                          <Link to={`/service/${service.id}`} className="btn">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="text-center mt-5 ">
              <Link to="/services" className="btn-view-all-services">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="section-4 py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <span className="text-uppercase fw-bold">Why Choose Us</span>
              <h2 className="mt-2 fw-bold">Building Excellence</h2>
            </div>
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="feature-card h-100">
                  <div className="icon-box">
                    <FaDraftingCompass />
                  </div>
                  <h3>Cutting Edge Solutions</h3>
                  <p>
                    We utilize the latest engineering software and sustainable
                    materials to ensure your structure is future-ready.
                  </p>
                </div>
              </div>

              {/* Card 2 - Expert Craftsmanship */}
              <div className="col-md-4">
                <div className="feature-card h-100">
                  <div className="icon-box">
                    <FaTools />
                  </div>
                  <h3>Expert Craftsmanship</h3>
                  <p>
                    Our team consists of certified professionals who pay
                    attention to every minor detail for flawless execution.
                  </p>
                </div>
              </div>

              {/* Card 3 - Safety & Quality */}
              <div className="col-md-4">
                <div className="feature-card h-100">
                  <div className="icon-box">
                    <FaShieldAlt />
                  </div>
                  <h3>Safety & Quality</h3>
                  <p>
                    Safety is our top priority. We follow strict international
                    standards to provide a secure and durable environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testimonials */}
        <section className="section-5 py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-5 fw-bold">What Our Clients Say</h2>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-5"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-card">
                    <div className="quote-icon mb-2">
                      <FaQuoteLeft className="quote-icon-custom" />
                    </div>
                    <p className="review-text">"{item.review}"</p>
                    <hr />
                    <div className="client-info d-flex align-items-center">
                      <FaUserCircle className="user-icon-placeholder me-3" />
                      <div className="text-start">
                        <h5 className="mb-0 fw-bold">{item.name}</h5>
                        <small className="text-primary">{item.role}</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Section 6: Blog */}
        <section className="section-6 py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <span className="text-uppercase fw-bold">Latest News</span>
              <h2 className="mt-2 fw-bold">Articles & Blog Posts</h2>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="blog-card h-100">
                  <div className="blog-img">
                    <img src={blog1img} alt="Blog" />
                  </div>
                  <div className="blog-body p-4 text-start">
                    <h3>How to manage projects</h3>
                    <a href="#" className="read-more-btn mt-3 d-inline-block">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/* Add Blog 2 & 3 here similarly */}
            </div>
            <div className="text-center mt-5">
              <Link to="/blogs" className="btn btn-view-all">
                View All Blogs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
