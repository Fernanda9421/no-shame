import React from 'react';
import { useParams } from 'react-router-dom';
import { ImageList, ImageListItem } from '@mui/material';
import { detailTShirtsG1 } from '../../../../data/details/detailsTShirtsG';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageDetails() {
  const { id } = useParams();

  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {detailTShirtsG1.map((item) => {
        if (Number(id) === item.number) {
          return (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          )
        }

        return <p>oi</p>;
      })}
    </ImageList>
  );
}
