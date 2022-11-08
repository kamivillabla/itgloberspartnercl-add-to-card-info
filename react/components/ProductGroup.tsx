/* import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import { ProductGroupProps } from './productGrouptype'
import style from './style.css'

const ProductGroup = (productGroup: ProductGroupProps, { blockClass }: { blockClass: string }) => {

  return (
    <>

      {
        productGroup.products.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item} >
              <div className={container__img}>
                <img className={image} src={item.imageUrls.at1x} />
              </div>
              <div className={container__item_info}>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p><span className={container__item_info_quantity}>Cantidad</span>:{item.quantity}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )

}

export default ProductGroup */
