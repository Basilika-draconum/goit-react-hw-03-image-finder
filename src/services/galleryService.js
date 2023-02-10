import axios from 'axios';

const galleryService = axios.create({
  baseURL:
    'https://pixabay.com/api/?q=cat&page=1&key=32798686-213103188f3fa7636822d64bb&image_type=photo&orientation=horizontal&per_page=12',
  params: {
    q: 'cat',
    page: 1,
    key: '32798686-213103188f3fa7636822d64bb',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getGallery = () => {
  const data = galleryService.get('');
  return data;
};
