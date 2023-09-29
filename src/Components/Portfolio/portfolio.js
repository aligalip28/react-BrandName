import React from "react";
import portfolio1 from "../../img/myportfolio1.png";
import portfolio2 from "../../img/myportfolio2.png";
import portfolio3 from "../../img/myportfolio3.png";
import portfolio4 from "../../img/myportfolio4.png";
import portfolio5 from "../../img/myportfolio5.png";

const products = [
  {
    id: 1,
    imageSrc: portfolio1,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    imageSrc: portfolio2,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 3,
    imageSrc: portfolio3,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 4,
    imageSrc: portfolio4,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 5,
    imageSrc: portfolio5,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  // More products...
];

function portfolio() {
  return (
    <div>
      <div className="bg-regal-blue">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="my-10 text-center">
            <h2 className="sr-only">Products</h2>
            <h2 className="text-4xl font-bold tracking-tight text-white ">
              My <span className="text-yellow-400 ">Portfolio</span>
            </h2>
            <p className="text-gray-400 ">
              There are many variations of passages ofLorem Ipsum available, but
              <br />
              the majority havesuffered alteration in some form, by injected
              humour,
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
