import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <NewsCard key={i} />
      ))}
    </div>
  );
};

export default NewsCards;
