import React from 'react';

type CardProps = {
    id: string,
    price: string,
    amount: string,
    title: string,
    desc: string,
    img: string,
};

interface SearchResultProps {
    searchResults: CardProps[],
    query: string
};

const SearchResult: React.FC<SearchResultProps> = ({ searchResults, query }) => {
    return (
        <section className="search-result">
            <div className="container">
                {
                    query && (
                        <p className='result-text'><span>“{query}”</span> açar sözü üzrə axtarış nəticələri...</p>
                    )
                }
                <div className='results-container'>
                    {searchResults?.map(item => (
                        <div className="result-card">
                            <img src={item.img} alt="" />
                            <h1 className='result-title'>{item.title}</h1>
                            <p className='result-desc'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SearchResult