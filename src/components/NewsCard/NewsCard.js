import React from 'react';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const NewsCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
        <div>
          <Typography
            vairant='body2'
            color='textSecondary'
            component=''
            h2
          ></Typography>
          <Typography
            vairant='body2'
            color='textSecondary'
            component=''
            h2
          ></Typography>
        </div>
        <Typography gutterBottom variant='h5'></Typography>
        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
};

export default NewsCard;
