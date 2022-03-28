import detalle from '../ItemDetail/ItemDetail';
import React from 'react'

function ItemDetailContainer() {
  return (
    <>
    { detalle.map ((data) => <div key={data.id} >
        <div className='btn-primary'>
          {`${data.precio}`}
        </div>
  
    </div> )}
    </>
  )
}

export default ItemDetailContainer