/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <header
      id="header"
      className={`header fixed-top ${scroll && "header-scrolled"}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <span>URL ShORTENER</span>
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Payout Rates
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Payment Proof
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Login
              </a>
            </li>
            <li>
              <a href="blog.html">Register</a>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>
                  <i class="bi bi-translate"></i>
                </span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a className="sub0menu" href="#">
                    English (US)
                  </a>
                </li>
                <li>
                  <a className="sub0menu" href="#">
                    español (España)
                  </a>
                </li>
                <li>
                  <a className="sub0menu" href="#">
                    français (France)
                  </a>
                </li>
                <li>
                  <a className="sub0menu" href="#">
                    português (Brasil)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
