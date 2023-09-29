import React from "react";

function footer() {
  return (
    <div>
      <div className="bg-regal-blue p-5">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white ">
            Contact<span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-gray-400 pt-8">
            There are many variations of passages ofLorem Ipsum <br />
            available, but the majority havesuffered alteration in some form, by
            injected humour,
          </p>
        </div>
        <div className="container mx-auto md:flex gap-20">
          <ul className="list-none text-yellow-400">
            <li className="py-2 flex">
              <p>Address_</p>
              <span className="text-white mx-2">
                23 S 80 Road, Benedict,ne, 68316 United States
              </span>
            </li>
            <li className="py-2 flex">
              <p>Phone_</p>

              <span className="text-white mx-2">+01 123 456 789</span>
            </li>
            <li className="py-2 flex">
              <p>E mail_</p>
              <span className="text-white mx-2">abc.xyz@gmail.com</span>
            </li>
            <li className="py-2 flex">
              <p>Website_</p>
              <span className="text-white mx-2">www.abc.xyz.com</span>
            </li>
          </ul>

          <div className="sm:col-span-2 block">
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-regal-blue1 py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="">
              <div className="col-span-full">
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    cols={120}
                    className="block w-full bg-regal-blue1 rounded-md border-0 py-1.5 text-white shadow-sm ring-0 ring-offset-current ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6"
                    placeholder="Message"
                  />
                  <input
                    type="button"
                    value="Contact Us"
                    className="bg-yellow-500 p-2 rounded-md my-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 pt-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white ">
            About<span className="text-yellow-400">Me.</span>
          </h2>
          <p className="text-gray-400 pt-4">
            There are many variations of passages ofLorem Ipsumavailable, but
            the majority havesuffered <br /> alteration in some form,
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer;
