import React from 'react';
import Card from "./Card";
import { cards } from '../../assets/const/cards';

const CardContainer: React.FC = () => {
    return (
        <section className="card-container | sec-mr-block">
            <div className="container">
                <div className="cards">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            price={card.price}
                            amount={card.amount}
                            title={card.title}
                            desc={card.desc}
                            img={card.img} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default CardContainer;