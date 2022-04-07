import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

export default function ProductItem({ product }) {
    console.log("product", product)
    
  return (
      product &&
    <Card>
      <NextLink href={`/product/${product?.slug?.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product?.image )}
            title={product?.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product?.name}</Typography>
            <Rating value={product?.rating} readOnly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product?.price}</Typography>
        <Button
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}