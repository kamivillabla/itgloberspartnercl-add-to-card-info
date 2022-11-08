import React from 'react'
/* Hooks que trae información de los productos */
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import style from './style.css'

/* import ProductGroup from './ProductGroup' */
/* import Totalizers from './Totalizers' */
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(style.container, blockClass)
  const container__total = generateBlockClass(style.container__total, blockClass)
  const container__item = generateBlockClass(style.container__item, blockClass)
  const container__img = generateBlockClass(style.container__img, blockClass)
  const image = generateBlockClass(style.image, blockClass)
  const container__item_info = generateBlockClass(style.container__item_info, blockClass)
  const container__item_info_quantity = generateBlockClass(style.container__item_info_quantity)

  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  console.log("Este producto tiene esta informacion:", productInfo)
  return (
    <div className={container}>
      {/* Listado de productp */}
      {items.map((item: any, index: number) => {
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
      })}
      {/* Valor total */}
      <hr />
      <div className={container__total}>
        <p>Tienes {items.length} productos en el carrito</p>
        <p>Total ${totalizers[0]?.value}</p>
      </div>
      {/* Manejador de acciones */}
      <ButtonGroup blockClass={blockClass} />
    </div>
  )
}

export default AddToCartInfo
