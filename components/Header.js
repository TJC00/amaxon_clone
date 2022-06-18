import Image from "next/image";
import {
    MenuIcon,
    SearchIcon, ShoppingCartIcon,

} from "@heroicons/react/outline"
export default function Header() {
    return (
        <header>
            {/*top nav*/}
                <div className={"flex items-center bg-amazon_blue p-1 flex-grow py-2"}>
                    <div className={"mt-2 flex italic flex-grow sm:flex-grow-0"}>
                        <Image
                            width={150}
                            height={40}
                            src={"/amazon-logo.png"}
                            objectFit={"contain"}
                            alt={"Amazon log"}
                            className={"cursor-pointer "}
                        />
                    </div>
                    {/*Search*/}
                    <div className={"hidden sm:flex rounded-md flex-grow cursor-pointer hover:bg-yellow-500 bg-yellow-400 items-center h-10"}>
                        <input className={"p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"} type={"text"} />
                        <SearchIcon className={"h-12 p-4"}/>
                    </div>
                    {/*Right*/}
                    <div className={"whitespace-nowrap mx-6 text-white flex items-center text-xs space-x-6"}>
                        <div className={"link"}>
                            <p>Hello TJChidanika</p>
                            <p className={"font-extrabold md:text-sm"}>Account & List</p>
                        </div>
                        <div className={"link"}>
                            <p>Returns</p>
                            <p className={"font-extrabold md:text-sm"}>& Orders</p>
                        </div>
                        <div className={"relative link flex items-center "}>
                            <span className={"absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"}> 0 </span>
                            <ShoppingCartIcon className={"h-10"}/>
                            <p className={"hidden md:inline mt-2 font-extrabold md:text-sm"}> Baskets </p>
                        </div>
                    </div>
                </div>
            {/*bottom nav*/}
            <div className={"flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white"}>
                <p className={"flex link items-center"}>
                    <MenuIcon className={"h-6 mr-r"}/>
                    All
                </p>
                <p className={"link"}>Prime Videos</p>
                <p className={"link"}>Amazon Business</p>
                <p className={"link"}>Today's Deals</p>.
                <p className={"hidden lg:inline"}>Electronics</p>
                <p className={"hidden lg:inline"}>Food & Grocery</p>
                <p className={"hidden lg:inline"}>Prime</p>
                <p className={"hidden lg:inline"}>Buy Again</p>
                <p className={"hidden lg:inline"}>Shopper Toolkit</p>
                <p className={"hidden lg:inline"}>Health & Personal Care</p>
            </div>
        </header>
    )
}


