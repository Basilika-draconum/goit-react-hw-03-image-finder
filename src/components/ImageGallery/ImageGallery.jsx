import React from 'react';
import css from './imageGallery.module.scss';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={css.imageGallery}>
      {gallery.map(item => {
        return (
          <li key={item.id} className={css.imageGalleryItem}>
            <img
              className={css.imageGalleryItem_image}
              src={item.webformatURL}
              alt={item.tags}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
