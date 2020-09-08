import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
  return (
    <Grid in>
      {articles.map((article, i) => (
        <NewsCard key={i} />
      ))}
    </Grid>
  );
};

export default NewsCards;
