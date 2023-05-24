import React from 'react'
import "../styles/Appartment.css"
import grey_star from "../assets/grey_star.svg";
import red_star from "../assets/red_star.svg";

const Rating = ({ rating }) => {
    const arrayStars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/* Boucle pour afficher l'étoile */}
            {arrayStars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={red_star}
                        alt=""
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={grey_star}
                        alt=""
                    />
                )
            )}
        </div>
    );
};

export default Rating;