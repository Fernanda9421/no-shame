import React, { useEffect } from 'react';
import Header from './components/Header/Header';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
    </>
  );
};
