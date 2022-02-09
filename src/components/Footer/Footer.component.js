import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.component";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class="footer-links">
        {/* <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact ME</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div> */}
        {/* <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Jiu Tak
              <FontAwesomeIcon icon={faLaptopCode} />
            </Link>
          </div>
          <small class="website-rights">Jiu Tak © 2022</small>
          <div class="social-icons">
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/bambijiu/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link github"
              href="https://github.com/jiutak"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/jiu-tak-a0350912a/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
