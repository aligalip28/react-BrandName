import React from "react";

const cards = [
  {
    id: 1,
    date: "June-2002 - 2020",
    title: "UX/UI Designer",
    subTitle: "Figma",
    commit:
      "There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some",
  },
  {
    id: 2,
    date: "June-2002 - 2020",
    title: "Product Designer",
    subTitle: "Adobe Photoshop",
    commit:
      "There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some",
  },
  {
    id: 3,
    date: "June-2002 - 2020",
    title: "Graphic Designer",
    subTitle: "Adobe Photoshop",
    commit:
      "There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered alteration in some",
  },
];

function experience() {
  return (
    <div>
      <div className="bg-regal-blue1">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white ">
            My <span className="text-yellow-400">Experience</span>
          </h2>
          <p className="text-gray-400">
            There are many variations of passages ofLorem Ipsum <br />
            available, but the majority havesuffered alteration in some form, by
            injected humour,
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
            {cards.map((cards) => (
              <div key={cards.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-regal-blue lg:aspect-none group-hover:opacity-75 lg:h-80 p-8">
                  <div className="flex justify-start">
                    <span className="text-white font-bold">{cards.date}</span>
                  </div>

                  <div className="mt-2 flex justify-between text-start font-bold">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        <p className="text-yellow-400  my-4 text-2xl">
                          {cards.title}
                        </p>
                      </h3>
                      <p className="mt-1 text-sm text-white  ">
                        {cards.subTitle}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 ">
                        {cards.commit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default experience;
