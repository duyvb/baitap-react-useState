import React, { useState } from 'react'
import GlassList from './GlassList';
import data from './data.json';

export default function GlassShop() {

  const [imgUrl, setImgUrl] = useState("./img/model.jpg");
  const [selectGlass, setSelectGlass] = useState(null);
  const handleChangeGlass = (product) => {
    setSelectGlass(product);
  };
  return (
    <div className='container' style={{ backgroundImage: 'url(./img/background.jpg)' }} >
      <h1 className='text-center'>Fashion Glasses Shop</h1>
      <div className='container-fluid'>
        <div className='row pt-4'>
          <div className='col-4 '>
            <div className='card'>
              <div className='model'>
                <img src={imgUrl} alt="glass" />
                {selectGlass && (<img src={selectGlass} alt="select" className="select-glass" />)}
              </div>
            </div>
          </div>
          <div className='col-8' >
            <GlassList products={data}
              onChangeGlass={handleChangeGlass} />
          </div>
        </div>
      </div>
    </div>
  )

}
