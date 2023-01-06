'use client'

import { Carousel } from "../../frontend/";

type Props = {
    images: Image[];
}

const ProductGallery = ({images}: Props) => {
  return (
    <>
        <Carousel images={images} />
    </>
  )
}

export default ProductGallery