import React, { useState } from 'react';
import './styles/card.css'
const Card = ({icon, username, number, title, indice, socialColor}) => {

    /* clase calculada */
    const cardClass=`card ${socialColor}`
    return (
        <>
            <article className={cardClass} >
                <p className="card-title">
                    <img src={icon} alt="" />
                    {username}
                 </p>
                <p className="card-followers">
                    <span className="card-followers-number">{number}</span>
                    <span className="card-followers-title">{title}</span>
                </p>
                <p className="card-today">
                    <img src="images/icon-up.svg" alt="" />
                    {indice}
                </p>
            </article>
        </>
    );
}
export default Card;


