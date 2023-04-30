import React from "react";
export default function Steps() {
  return (
    <section id="values" class="values">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>IT'S JUST THREE STEPS</h2>
          <p>
            HOW YOU <b>START?</b>
          </p>
        </header>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="box step-num">
              <img src="assets/img/values-1.png" class="img-fluid" alt="" />
              <h3>CREATE AN ACCOUNT</h3>
              <p>1</p>
            </div>
          </div>

          <div
            class="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="box step-num">
              <img src="assets/img/values-2.png" class="img-fluid" alt="" />
              <h3>SHORTEN YOUR LINK</h3>
              <p>2</p>
            </div>
          </div>

          <div
            class="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="box step-num">
              <img src="assets/img/values-3.png" class="img-fluid" alt="" />
              <h3>EARN MONEY</h3>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
