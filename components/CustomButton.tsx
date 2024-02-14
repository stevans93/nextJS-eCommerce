"use client";
import React from 'react';
import Image from "next/image";
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, containerStyles, handleClick, btnType, testStyles, isDisabled}: CustomButtonProps) => {
  return (
    <button disabled={false} type={ btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1 ${testStyles}`}>{title}</span>
    </button>
  )
}

export default CustomButton;
