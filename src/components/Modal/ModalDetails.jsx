import React from 'react';

export const ModalDetails = ({ modalDetails }) => {
  return <img src={modalDetails.largeImageURL} alt={modalDetails.tags} />;
};
