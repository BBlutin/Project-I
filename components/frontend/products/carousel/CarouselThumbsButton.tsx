import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  imgSrc: string
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'product-thumbs__slide'.concat(
        selected ? ' product-thumbs__slide--selected' : '',
      )}
    >
      <button
        onClick={onClick}
        className="product-thumbs__slide__button"
        type="button"
      >
        <Image
          className="object-contain pl-[0.8rem] object-center"
          src={imgSrc}
          fill
          alt="Your alt text"
        />
      </button>
    </div>
  )
}