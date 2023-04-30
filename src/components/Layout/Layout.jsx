/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        // width: "100vw",
        fontFamily: "'montserrat'",

        "& *": {
          fontFamily: "montserrat",
        },
      }}
    >
      <Header />
      <Box sx={{ width: "100%" }}>
        <Outlet />{" "}
      </Box>

      <Footer />

      <a
        href="#"
        className={`back-to-top d-flex align-items-center justify-content-center ${
          scroll && "active"
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </Box>
  );
}
