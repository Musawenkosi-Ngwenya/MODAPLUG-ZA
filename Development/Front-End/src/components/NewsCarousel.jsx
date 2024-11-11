import React from "react";
import "./Styles/NewsCarousel.css";

const NewsCarousel = () => {
    const newsItems = [
        "Our Brands : ",
        "Composure",
        "FreakSinz",
        "Mafia Culture",
    ];

    return (
        <div className="news-carousel">
            <div className="news-track">
                {newsItems.map((item, index) => (
                    <span key={index} className="news-item">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default NewsCarousel;
