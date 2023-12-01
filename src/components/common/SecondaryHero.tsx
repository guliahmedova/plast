import rightArrow from '../../assets/images/right-arrow.svg';
import React, { useState } from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';
import heroBg from  '../../assets/images/hero.svg';

interface SecondaryHeroProps {
  title: string,
  subTitle1?: string,
  subTitle2?: string,
  hasInput?: boolean,
  onSearch?: (query: string) => void;
};

const SecondaryHero: React.FC<SecondaryHeroProps> = ({ title, subTitle1, subTitle2, hasInput, onSearch }) => {
  const [searchText, setSearchText] = useState('');
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchText(query);
    if (onSearch) {
      onSearch(query); 
    }
  };

  return (
    <section className="secondary-hero" style={{backgroundImage: `url(${heroBg})`}}>
      <div className='secondary-hero-content'>
        <h1 className='hero-title | fw-bold'>{title}</h1>
        {
          hasInput ? (
            <div className='search-div'>
              <input type='text' placeholder='Axtar...' value={searchText} onChange={handleInputChange} />
              <img src={searchIcon} alt="" className='search-icon' />
            </div>
          ) : (
            <div className='d-flex | sub-title'>
              <span>{subTitle1}</span>
              <img src={rightArrow} alt="" />
              <span>{subTitle2}</span>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default SecondaryHero;