import React from 'react'
import GlassItem from './GlassItem';



export default function GlassList({products, onChangeGlass}) {




  return (
    <div className='row'>
      {products.map((product) => {
        return(
          <div key={product.id} className='col-4' onClick={() => onChangeGlass(product.url)} >
              <GlassItem product={product}
              />
          </div>
        );
      })}
      
    </div>
  );
}
