import { circleCards } from "../../assets/const/circleCards";
import CircleCard from "../common/CircleCard";

const ProductCards = () => {
    return (
        <section className="product-cards">
            <div className="container">
                <div className="cards">
                    {circleCards.map(card => (
                        <CircleCard
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            desc={card.desc}
                            price={card.price}
                            amount={card.amount}
                            img={card.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCards