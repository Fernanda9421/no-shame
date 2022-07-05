import React from 'react';
import { useParams } from 'react-router-dom';
import detailTShirtsG2 from '../../../../data/details/detailsTShirtsG2';
import detailTShirtsGG from '../../../../data/details/detailsTShirtsGG';
import detailTShirtsG1 from '../../../../data/details/detailsTShirtsG1';
import detailTShirtsG from '../../../../data/details/detailsTShirtsG';
import detailTShirtsM from '../../../../data/details/detailsTShirtsM';
import detailTShirtsP from '../../../../data/details/detailsTShirtsP';
import './imageDetails.css';

export default function ImageDetail() {
  const { id } = useParams();

  const renderTShirts = (sizeTshirt) => (
    sizeTshirt.map((item) => {
      if (item.number === Number(id)) {
        return (
          <div className='container'>
            <div className='container-mini'>
              <img className='mini-item' src={ item.img1 } alt='ddd' />
              <img className='mini-item' src={ item.img3 } alt='ddd' />
            </div>
            <div>
              <img className='big-item' src={ item.img2 } alt='ddd' />
            </div>
          </div>
        )
      }

      return null;
    })
  );

  const chooseTshirt = () => {
    if (Number(id) <= 10) {
      return renderTShirts(detailTShirtsP);
    }
    if (Number(id) >= 11 && Number(id) <= 42) {
      return renderTShirts(detailTShirtsM);
    }
    if (Number(id) >= 43 && Number(id) <= 66) {
      return renderTShirts(detailTShirtsG);
    }
    if (Number(id) >= 67 && Number(id) <= 71) {
      return renderTShirts(detailTShirtsG1);
    }
    if (Number(id) >= 72 && Number(id) <= 78) {
      return renderTShirts(detailTShirtsGG);
    }
    if (Number(id) >= 79 && Number(id) <= 83) {
      return renderTShirts(detailTShirtsG2);
    }
  }

  return (
    <>
      { chooseTshirt() }
    </>
  );
}
