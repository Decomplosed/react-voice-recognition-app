import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
  return (
    <Grid in>
      <Grid container alignItems='stretch'>
        {articles.map((article, i) => (
          <NewsCard key={i} />
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsCards;
