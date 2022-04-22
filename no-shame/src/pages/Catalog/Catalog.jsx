import React from 'react';
import Cards from './components/Cards/CardTstirt';
import ImageCatalog from './components/ImageCatalog/ImageCatalog';
import Sizes from './components/Sizes/Sizes';

export default function Catalog() {
  return (
    <>
      <ImageCatalog />
      <Sizes />
      <Cards />
    </>
  );
};
