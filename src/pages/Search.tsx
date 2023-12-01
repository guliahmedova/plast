import SecondaryHero from "../components/common/SecondaryHero"
import SearchResult from "../components/searchPage/SearchResult"
import { useState } from 'react';
import { circleCards } from "../assets/const/circleCards";

interface CardProps {
  id: string,
  price: string,
  amount: string,
  title: string,
  desc: string,
  img: string
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CardProps[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredResults = circleCards.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <>
      <SecondaryHero title="Axtar" hasInput={true} onSearch={handleSearch} />
      <SearchResult searchResults={searchResults} query={searchQuery} /> 
    </>
  )
}

export default Search 