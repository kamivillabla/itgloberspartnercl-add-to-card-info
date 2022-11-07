import React from 'react'
/* Hooks que trae información de los productos */
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import style from './style.css'

import ProductGroup from './ProductGroup'
/* import Totalizers from './Totalizers' */
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(style.container, blockClass)
  const container__total = generateBlockClass(style.container__total, blockClass)

  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  console.log("Este producto tiene esta informacion:", productInfo)
  return (
    <div className={container}>
      {/* Listado de productp */}
      <ProductGroup products={items} />
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
