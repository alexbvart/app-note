import React, { useState } from 'react';
import './styles/topCard.css'
import Card from './Card';
const TopCardList = () => {

    const cardListData = [
        {
            id:         '1',
            icon:       'images/icon-facebook.svg',
            username:   '@alexbvart',
            number:      '1483', 
            title:       'Followers', 
            indice:      '-12',
            socialColor: 'facebook',
        },
        {
            id:         '2',
            icon:       'images/icon-twitter.svg',
            username:   '@alexbvart',
            number:      '28k', 
            title:       'Followers', 
            indice:      '42',
            socialColor: 'twitter',
        },
        {
            id:         '3',
            icon:       'images/icon-instagram.svg',
            username:   '@alexbvart',
            number:      '6k', 
            title:       'Followers', 
            indice:      '36',
            socialColor: 'instagram',
        },
        {
            id:         '4',
            icon:       'images/icon-youtube.svg',
            username:   '@alexbvart',
            number:      '12k', 
            title:       'Followers', 
            indice:      '94',
            socialColor: 'youtube',
        },
    ]


    return (
        <>
            <section className="top-cards">
                <div className="wrapper">
                    <div className="grid">
                    {
                        cardListData.map((cardData) => (

                            <Card  
                                key={cardData.id}
                                icon={cardData.icon} 
                                username={cardData.username} 
                                number={cardData.number}
                                title={cardData.title}
                                indice={cardData.indice}
                                socialColor ={cardData.socialColor}
                            />
                        ))
                    }

                    </div>
                </div>
            </section>
        </>
    );
}
export default TopCardList;