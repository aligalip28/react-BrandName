import React from "react";
import heroImage from "../../img/about.png";

function hero() {
  return (
    <div className="container mx-auto">
      <div className="row">
        <div className="md:flex items-center p-10 gap-12">
          <div className="col-span-6 my-10 ">
            <h1 className="text-yellow-400 text-xl">Hello , Welcome</h1>
            <h1 className="text-white font-bold text-3xl">
              I am Anderson Coper
            </h1>
            <p className="text-gray-400 my-3">
              There are many variations of passages ofLorem Ipsum available, but
              the majority havesuffered alteration in some form, by injected
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
          <div className="col-span-6">
            <img src={heroImage} alt="Hero" className="w-fit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
