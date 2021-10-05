import React from 'react';

function Info({ cardTitle, cardText, cardTitle2, cardText2, cardTitle3, cardText3, icon, background }) {
    const card = [
        {
            cardTitle: cardTitle,
            cardText: cardText,
            icon: icon
        },
        {
            cardTitle: cardTitle2,
            cardText: cardText2,
        },
        {
            cardTitle: cardTitle3,
            cardText: cardText3,
        }
    ]
    return (

        <div style={
            {
                background: `url(${background})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }
        }
            className="performance__image d-flex">
            <ul className="list-design">
                {
                    card.map(item => {
                        return (
                            <li>
                                <h3> {item?.icon}{item.cardTitle}</h3>
                                <p>{item.cardText}</p>
                            </li>
                        )
                    })

                }
            </ul>
        </div>
    )
}

export default Info
