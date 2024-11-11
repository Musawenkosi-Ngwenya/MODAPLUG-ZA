import React from "react";
import "./Styles/ImageBanner.css";
import bannerImage from "../Assets/banner.png";

const ImageBanner = () => {
    return (
        <div className="image-banner">
            <img
                src={bannerImage}
                alt="Promotional Banner"
            />
        </div>
    );
};

export default ImageBanner;