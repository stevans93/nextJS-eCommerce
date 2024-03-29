"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { ShoeProps } from '@/types';
import { CustomButton, ShoeDetails } from '.';

interface ShoeCardProp {
    shoe: ShoeProps;
}

const ShoeCard = ({shoe}: ShoeCardProp) => {
    const { name, price, image, description, quantity } = shoe;

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='shoe-card group'>
        <div className='show-card__content'>
          <h2 className='shoe-card__content-title'>{name.substring(0, 20)}</h2>
        </div>

        <p className='flex mt-6 text-[14px] font-extrabold'>
          Quantity: {quantity}
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
          <Image src={image} alt={name} priority={true} fill className='object-contain'/>
        </div>

        <p className='flex mt-6 text-[24px] font-extrabold'>
          Price: ${price}
        </p>

        <CustomButton title='View More' containerStyles='w-full py-[16px] border-2 border-primary-blue rounded-full bg-primary-blue my-[16px]' testStyles='font-extrabold text-white' handleClick={() => setIsOpen(true)} />

        <ShoeDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} shoe={shoe} />
    </div>
  )
}

export default ShoeCard;
