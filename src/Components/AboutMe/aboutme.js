import React from "react";
import Aboutme from "../../img/aboutme.png";

function aboutme() {
  return (
    <div>
      <section className="bg-regal-blue">
        <div className="container mx-auto">
          <div className="row">
            <div className=" md:flex items-center p-10 gap-10">
              <div className="border-8 rounded-2xl border-yellow-400 m-8 items-center ">
                <img
                  src={Aboutme}
                  alt="aboutme"
                  className="w-screen relative ml-6 mb-4"
                />
              </div>

              <div className="my-10">
                <h1 className="text-white text-3xl font-bold">
                  About
                  <span className="text-yellow-400 text-3xl font-bold">
                    Me.
                  </span>
                </h1>
                <p className="text-gray-400 my-3">
                  There are many variations of passages ofLorem Ipsum available,
                  but the majority havesuffered alteration in some form, by
                  injected humour, Passages ofLorem Ipsumavailable, but the
                  majority havesuffered alteration in some form, by injected
                  humour,
                </p>
                <a
                  href="0"
                  className="bg-yellow-400 text-black p-3 rounded-lg my-3"
                  type="button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default aboutme;
