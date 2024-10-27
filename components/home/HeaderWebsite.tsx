"use client";
import React, { useState } from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <FontAwesomeIcon icon={faBook} className="me-3" />
          eLEARNING
        </h2>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        onClick={toggleMenu}
        aria-controls="navbarCollapse"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`navbar-collapse `}
        style={{ display: isOpen ? "block" : "none" }}
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item text-blue-400 nav-link active">
            Home
          </a>
          <a href="/about" className="nav-item nav-link">
            About
          </a>
          <a href="/courses" className="nav-item nav-link">
            Courses
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu fade-down m-0">
              <a href="/team" className="dropdown-item">
                Our Team
              </a>
              <a href="/testimonial" className="dropdown-item">
                Testimonial
              </a>
              <a href="/404" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="/contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <Link href="/login"           className="btn btn-primary py-4 px-lg-5 items-center d-none d-lg-flex"
        >

          Join Now<i className="fa fa-arrow-right ms-3"></i>
        </Link>

      </div>
    </nav>
  );
}
