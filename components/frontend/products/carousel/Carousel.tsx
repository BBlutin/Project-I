"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Thumb } from "./CarouselThumbsButton";
import urlFor from "../../../../lib/urlFor";
import Image from "next/image";

type Props = {
  images: Image[];
  options?: EmblaOptionsType;
};

const Carousel = ({ images, options }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "center",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <>
      <div className="flex h-[60vh] md:h-[70vh] flex-col product-sticky">
        <div className="overflow-hidden h-5/6" ref={emblaMainRef}>
          <div className="product__container">
            {images.map((image, index) => (
              <div className="product__slide" key={index}>
                <Image
                  src={urlFor(image).url()}
                  className="object-contain object-center rounded-md"
                  fill
                  alt="Image du produit"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 mt-2 md:mt-8 h-1/6">
          <div className="product-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="product-thumbs__container">
              {images.map((image, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={urlFor(image).url()}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
