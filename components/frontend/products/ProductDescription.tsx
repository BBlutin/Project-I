"use client";

import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "../global/RichTextComponents";
import urlFor from "../../../lib/urlFor";

type Prop = {
  product: Product;
};

const ProductDescription = ({ product }: Prop) => {
  const [activeSize, setActiveSize] = useState("");
  const [status, setStatus] = useState(0);
  const [sizes, setSizes] = useState(false);

  const handleSizeChange = (id: string) => {
    setActiveSize(id);
    product.sizes.map((size) => {
      if (size._key === id && size.quantity > 0) {
        setStatus(1);
      } else if (size._key === id) {
        setStatus(2);
      }
    });
  };

  useEffect(() => {
    if (product.sizes.length <= 1 && product.sizes[0].name === "none") {
      setActiveSize(product.sizes[0]._key);
      if (product.sizes[0].quantity > 0) {
        setStatus(1);
      } else {
        setStatus(2);
      }
    } else {
      setActiveSize(product.sizes[0]._key);
      setSizes(true);
    }
  }, []);

  return (
    <div className="pt-4 md:pt-6">
      <span className="block text-neutral-600 dark:text-neutral-400 mb-1.5 md:mb-2.5">
        {product.type}
      </span>
      <h1 className="mb-1.5 md:mb-2.5 font-heading uppercase text-3xl font-bold">
        {product.name}
      </h1>
      <div className="block text-neutral-600 dark:text-neutral-400 mb-1.5 md:mb-2.5">
        {product.discount ? (
          <span className="block mt-1 mb-4 text-grey-900 dark:text-white">
            <span className="font-semibold text-green-600 dark:text-green-400">
              {product.discount} €
            </span>
            <span className="ml-1 font-medium line-through text-neutral-500">
              {product.price} €
            </span>
          </span>
        ) : (
          <span className="block mt-1 mb-4 font-semibold text-neutral-900 dark:text-neutral-100">
            {product.price} €
          </span>
        )}
      </div>
      <div className="my-5">
        <hr className="text-neutral-200 h-[1px] bg-neutral-200 dark:text-neutral-800 dark:bg-neutral-800 dark:opacity-30" />
      </div>
      <div className="mt-6">
        {sizes && (
          <>
            <div className="flex justify-between mb-5 text-sm font-medium text-neutral-900 dark:text-neutral-100">
              <span>Taille</span>
            </div>
            <div className="grid w-full grid-cols-5 gap-1">
              {product.sizes.map((size) => {
                let inStock = false;
                if (size.quantity > 0) {
                  inStock = true;
                }
                return (
                  <div
                    key={size._key}
                    onClick={() => handleSizeChange(size._key)}
                    className={`relative z-10 flex items-center justify-center h-10 text-xs font-medium border rounded cursor-pointer border-neutral-200 dark:border-neutral-700 ${
                      size._key === activeSize
                        ? "border-neutral-800 dark:border-neutral-100"
                        : "hover:border-neutral-400 hover:dark:border-neutral-500"
                    }`}
                  >
                    <span
                      className={
                        !inStock ? "text-neutral-300 dark:text-neutral-500" : ""
                      }
                    >
                      {size.name}
                    </span>
                    {!inStock && (
                      <div className="absolute w-full h-full p-px">
                        <div className="relative w-full h-full">
                          <div className="diagonal"></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
        <div className="hidden w-full mt-5 md:block">
          {status < 2 ? (
            <>
              {product.sizes[0].name != "none" ? (
                <>
                  {true ? (
                    <button
                      className="w-full px-6 py-4 leading-tight text-white transition-all duration-500 rounded-lg snipcart-add-item button hover:bg-primary dark:hover:bg-primary dark:hover:text-white bg-neutral-900 dark:bg-white dark:text-neutral-900"
                      data-item-id={product.slug.current}
                      data-item-price={
                        product.discount ? product.discount : product.price
                      }
                      data-item-description=""
                      data-item-custom1-name="Taille"
                      data-item-custom1-type="readonly"
                      data-item-custom1-value={
                        product.sizes.find(
                          (size: any) => size._key === activeSize
                        )?.name
                      }
                      data-item-image={urlFor(product.image[0]).url()}
                      data-item-name={product.name}
                      data-item-custom2-name="Flocage"
                      data-item-custom3-name="Custom"
                      data-item-custom3-type="hidden"
                      data-item-custom3-value="Yes"
                    >
                      Ajouter au panier
                    </button>
                  ) : (
                    <button
                      className="w-full px-6 py-4 leading-tight text-white transition-all duration-500 rounded-lg snipcart-add-item button hover:bg-primary dark:hover:bg-primary dark:hover:text-white bg-neutral-900 dark:bg-white dark:text-neutral-900"
                      data-item-id={product.slug.current}
                      data-item-price={
                        product.discount ? product.discount : product.price
                      }
                      data-item-description=""
                      data-item-custom1-name="Taille"
                      data-item-custom1-type="readonly"
                      data-item-custom1-option="XS|S|M|L|XL|XXL"
                      data-item-custom1-value={
                        product.sizes.find(
                          (size: any) => size._key === activeSize
                        )?.name
                      }
                      data-item-image={urlFor(product.image[0]).url()}
                      data-item-name={product.name}
                      data-item-custom2-name="Flocage"
                    >
                      Ajouter au panier
                    </button>
                  )}
                </>
              ) : (
                <button
                  className="w-full px-6 py-4 leading-tight text-white transition-all duration-500 rounded-lg snipcart-add-item button hover:bg-primary dark:hover:bg-primary dark:hover:text-white bg-neutral-900 dark:bg-white dark:text-neutral-900"
                  data-item-id={product.slug.current}
                  data-item-price={
                    product.discount ? product.discount : product.price
                  }
                  data-item-description=""
                  data-item-image={urlFor(product.image[0]).url()}
                  data-item-name={product.name}
                >
                  Ajouter au panier
                </button>
              )}
            </>
          ) : (
            <button
              disabled
              className="w-full px-6 py-4 leading-tight transition-all duration-500 rounded-lg button text-neutral-200 bg-neutral-400 dark:text-neutral-600 dark:bg-neutral-400"
            >
              En rupture
            </button>
          )}
        </div>
      </div>
      <div className="my-7">
        <hr className="text-neutral-200 h-[1px] bg-neutral-200 dark:text-neutral-800 dark:bg-neutral-800 dark:opacity-30" />
      </div>
      <div className="flex flex-col text-sm font-light">
        <PortableText value={product.desc} components={RichTextComponents} />
      </div>
    </div>
  );
};

export default ProductDescription;
