import React, { useEffect } from 'react';
import Cards from './components/Cards/CardTstirt';
import ImageCatalog from './components/ImageCatalog/ImageCatalog';
import Sizes from './components/Sizes/Sizes';

export default function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ImageCatalog />
      <Sizes />
      <Cards />
    </>
  );
};
