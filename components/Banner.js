import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Banner() {
    return (
        <div className={"relative"}>
            <div className={"absolute w-full h-32 bg-gradient-to-t from-gray-400 to-transparent bottom-0 z-20"}/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={10000}
            >
                <div>
                    <img src={"/img-1.jpg"} />
                </div>
                <div>
                    <img src={"/img-2.jpg"} />
                </div>
                <div>
                    <img src={"/img-3.jpg"} />
                </div>
            </Carousel>
        </div>
    )
}
