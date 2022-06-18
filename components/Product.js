import Image from "next/image";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/solid";
import ReactCurrencyFormatter from "react-currency-formatter";
const MAX_RATING = 5;
const MIN_RATING= 1;
export default function Product({id,title,price,description,category,image}) {

    const [rating]= useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1)+MIN_RATING)

    )
    const [hasPrime]=useState(Math.random()<0.5);
    return (
        <div className={"relative flex flex-col m-5 bg-gray-200 z-30 p-10"}>
            <p className={"italic absolute to-2 right-4 text-xs font-semibold text-gray-800 bg-yellow-500 p-2 rounded-md"}>{category}</p>
            <Image
                src={image}
                height={200}
                width={200}
                objectFit={"contain"}
            />
            <h4 className={"my-3"}> {title} </h4>
            <div className={"flex"}>
                {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <StarIcon className={"flex flex-row h-4 text-yellow-500"}/>
                    ))}
            </div>
            <p className={"mt-2 text-xs mb-2 line-clamp-2"}>
                {description}
            </p>
            <div>
                <ReactCurrencyFormatter quantity={price} currency={"EUR"} />
            </div>
            {hasPrime &&(<div className={"flex items-center scroll-p-2"}> Has A Prime </div>)}
            <button className={"mt-auto button"}> Add to basket </button>
        </div>
    )
}


