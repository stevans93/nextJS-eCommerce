import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchBarNameProps {
    menuName: string;
    setMenuName: (name: string) => void;
}

export interface ShoeProps {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    quantity: number,
    rating: {
        rate: number,
        count: number
    }
}