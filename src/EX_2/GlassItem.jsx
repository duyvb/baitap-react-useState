
import React from 'react'

export default function GlassItem({ product}) {

  return (
    <div className='col-8'>
      <div className='card p-2 m-3'>
        <img className='card-img' src={product.url} alt={product.name} />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text '>Price: ${product.price}</p>
        </div>
      </div>

    </div>

  )
}
