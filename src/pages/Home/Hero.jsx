import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { WOW } from "wowjs";
import "wowjs/css/libs/animate.css";
// import "animate.css";

export default function Hero() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <Box id="hero" className="hero d-flex align-items-center">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "100vw" }}
      >
        <Box
          sx={{
            flex: 0.5,
            textAlign: "center",
          }}
        >
          <h2
            className="wow zoomIn"
            data-wow-delay=".3s"
            style={{
              color: "white",
              fontSize: "23px",
              lineHeight: "23px",
              marginBottom: "45px",
              fontWeight: "normal",
            }}
          >
            Shorten URLs And
          </h2>
          <h1
            className="wow pulse"
            data-wow-delay="2s"
            style={{
              color: "#fac025",
              fontSize: "60px",
              lineHeight: "60px",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            EARN MONEY
          </h1>

          <div
            class="form-group home-search wow rotateInUpLeft"
            data-wow-delay=".3s"
          >
            <input
              type="text"
              name="url"
              placeholder="Your URL Here"
              required="required"
              class="form-control input-lg"
              id="url"
            />
            <input type="hidden" name="ad_type" value="2" />
            <button
              class="btn-captcha"
              id="invisibleCaptchaShort"
              type="submit"
            >
              <img
                src="https://shrinkme.io/modern_theme/img/Right-Arrow.png"
                alt=""
              />
            </button>
          </div>

          <h2
            className="wow zoomIn"
            // data-wow="zoom-in"
            data-wow-delay=".3s"
            style={{
              color: "white",
              fontSize: "23px",
              lineHeight: "23px",
              marginBottom: "45px",
              fontWeight: "normal",
            }}
          >
            HIGHEST PAYING URL SHORTENER JOIN NOW AND EARN UP TO $220 / 10000
            VIEWS
          </h2>

          {/* <div data-aos="fade-up" data-aos-delay="600">
            <div className="text-center text-lg-center">
              <a
                href="#about"
                className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
              >
                <span>Get Started</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div> */}
        </Box>
      </Stack>
    </Box>
  );
}
