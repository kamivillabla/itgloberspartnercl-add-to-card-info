import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import style from './style.css'
interface ProductGroupProps {
  products: {
    name: string,
    price: number,
    imageUrls: string
    id: string,
    quantity: number,
  }[];
}
const ProductGroup = (productGroup: ProductGroupProps, { blockClass }: { blockClass: string }) => {
  const container__item = generateBlockClass(style.container__item, blockClass)
  const container__img = generateBlockClass(style.container__img, blockClass)
  const image = generateBlockClass(style.image, blockClass)
  const container__item_info = generateBlockClass(style.container__item_info, blockClass)
  const container__item_info_quantity = generateBlockClass(style.container__item_info_quantity)
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

export default ProductGroup
