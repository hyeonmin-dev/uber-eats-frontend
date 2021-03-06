import React from "react";
import { restaurant_restaurant_restaurant_menu_options } from "../__generated__/restaurant";

interface IDishProps {
    id?: number;
    name: string;
    price: number;
    description: string;
    isCustomer?: boolean;
    orderStarted?: boolean;
    isSelected?: boolean;
    options?: restaurant_restaurant_restaurant_menu_options[] | null;
    addItemToOrder?: (dishId: number) => void;
    removeItemToOrder?: (dishId: number) => void;
    children?: any;
}

export const Dish: React.FC<IDishProps> = ({ children: dishOptions, id = 0, name, price, description, options, orderStarted = false, isCustomer = false, isSelected = false, addItemToOrder, removeItemToOrder }) => {
    
    const onClick = () => {
        if (orderStarted) {
            if (!isSelected && addItemToOrder) {
                return addItemToOrder(id);
            }

            if (isSelected && removeItemToOrder) {
                return removeItemToOrder(id);
            }
        }
    };
    return (
        <div
            className={` px-8 py-4 border cursor-pointer  transition-all ${
                isSelected ? "border-gray-800" : " hover:border-gray-800"
            }`}
        >
            <div className="mb-5">
                <h3 className="text-lg font-medium ">
                    {name}{" "}
                    {orderStarted && (
                        <button onClick={onClick}>{isSelected ? "Remove" : "Add"}</button>
                    )}
                </h3>
                <h4 className="font-medium">{description}</h4>
            </div>
            <span>${price}</span>
            {isCustomer && options && options?.length !== 0 && (
                <div>
                    <h5 className="mt-8 mb-3 font-medium">Dish Options:</h5>
                    {dishOptions}
                </div>
            )}
        </div>
    )
}