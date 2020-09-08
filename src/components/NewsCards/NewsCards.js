import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
  return (
    <Grid in>
      <Grid container alignItems='stretch' spacing={3}>
        {articles.map((article, i) => (
          <Grid item>
            <NewsCard key={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsCards;
