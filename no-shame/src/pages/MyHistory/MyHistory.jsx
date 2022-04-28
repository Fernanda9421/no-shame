import React from 'react';
import DescriptionHistory from './components/DescriptionHistory/DescriptionHistory';
import ImageHistory from './components/ImageHistory/ImageHistory';

import './myHistory.css';

export default function MyHistory() {
  return (
    <div className='myHistory'>
      <ImageHistory />
      <DescriptionHistory />
    </div>
  )
}
