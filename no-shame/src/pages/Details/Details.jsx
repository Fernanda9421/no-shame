import React from 'react';
import DescriptionDetails from './components/DescriptionDetails/DescriptionDetails';
import ImageDetail from './components/ImageDetails/ImageDetail';
// import ImageDetails from './components/ImageDetails/ImageDetails';
import './details.css';

export default function Details() {
  return (
    <div className='details'>
      <ImageDetail />
      <DescriptionDetails />
    </div>
  )
}
