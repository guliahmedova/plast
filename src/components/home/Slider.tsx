import React, { useState, useEffect } from "react";
import { circleCards } from "../../assets/const/circleCards";
import leftSliderBtn from '../../assets/images/grayBtn.svg';
import rightSliderBtn from '../../assets/images/rightGraybtn.svg';
import CircleCard from "../common/CircleCard";

const Slider: React.FC = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [viewportWidth, setViewportWidth] = React.useState<number>(window.innerWidth);

  const cardsPerPage = viewportWidth > 1234 ? 5 : 2;
  const totalDots = circleCards.length / cardsPerPage;

  const nextGroup = () => {
    const maxGroups = Math.ceil(circleCards.length / cardsPerPage);
    if (currentGroup < maxGroups - 1) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const prevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="slider">
      <div className="container">

        <div className="slider-container">
          {circleCards.slice(currentGroup * cardsPerPage, (currentGroup + 1) * cardsPerPage).map(card => (
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

        <div className="slider-bottom">
          <div className="slider-btns">
            <button className={`slider_btn ${currentGroup === Math.ceil(circleCards.length / cardsPerPage) - 1 ? '' : 'slider-btn_active'}`} onClick={prevGroup}><img src={leftSliderBtn} alt="" /></button>
            <button className={`slider_btn ${currentGroup === 0 ? '' : 'slider-btn_active'}`} onClick={nextGroup}><img src={rightSliderBtn} alt="" /></button>
          </div>
          <div className="slider-line"></div>
          <div className="slider-dots">
            {Array.from({ length: totalDots }, (_, index: number) => (
              <button
                key={index}
                className={`dot-btn ${index === currentGroup ? 'dot-btn_active' : ''}`}
                onClick={() => {
                  setCurrentGroup(index);
                }}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Slider;