import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/ProductCarousel.css";

// Import images from the Assets folder
import product1 from "../Assets/C1.JPG";
import product2 from "../Assets/C2.JPG";
import product3 from "../Assets/C3.JPG";

import product4 from "../Assets/MC1.JPG";
import product5 from "../Assets/MC2.JPG";
import product6 from "../Assets/MC3.JPG";

import product7 from "../Assets/FS1.jpg";
import product8 from "../Assets/FS2.JPG";
import product9 from "../Assets/FS3.JPG";

const ProductCarousel = ({ title, images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="product-carousel">
            <h2>{title}</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="product-item" key={index}>
                        <img src={image} alt={`Product ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const ProductCarouselImages = () => {
    // Define image sets for different carousels
    const imagesSet1 = [product1, product2, product3]; // Carousel 1
    const imagesSet2 = [product4, product5, product6]; // Carousel 2
    const imagesSet3 = [product7, product8, product9]; // Carousel 3

    return (
        <div>
            {/* Three carousels with three images each */}
            <ProductCarousel title="Composure" images={imagesSet1} />
            <ProductCarousel title="Mafia Culture" images={imagesSet2} />
            <ProductCarousel title="FreakSinz" images={imagesSet3} />
        </div>
    );
};

export default ProductCarouselImages;
