import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start border-top shadow-sm mt-5">
      <div className="container p-4">
        {/* Social media */}
        <section className="mb-4 d-flex justify-content-center">
          <a className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-danger btn-floating mx-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-dark btn-floating mx-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>

        {/* Policy Links */}
        <div className="d-flex justify-content-center mb-3">
          <a href="#!" className="text-decoration-none text-muted mx-3">Privacy Policy</a>
          <a href="#!" className="text-decoration-none text-muted mx-3">Cookie Policy</a>
          <a href="#!" className="text-decoration-none text-muted mx-3">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted">
          © 2020 Copyright: <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
