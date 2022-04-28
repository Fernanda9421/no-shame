import React, { useEffect } from 'react';
import DescriptionHistory from './components/DescriptionHistory/DescriptionHistory';
import ImageHistory from './components/ImageHistory/ImageHistory';

import './myHistory.css';

export default function MyHistory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='myHistory'>
      <ImageHistory />
      <DescriptionHistory />
    </div>
  )
}
