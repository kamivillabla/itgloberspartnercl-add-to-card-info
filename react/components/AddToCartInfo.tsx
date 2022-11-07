import React from 'react'
/* Hooks que trae información de los productos */
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import style from './style.css'
/*
import ProductGroup from './ProductGroup' */
import Totalizers from './Totalizers'
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(style.container, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  console.log("este producto tiene esta info:", productInfo)
  console.log('Estos son mis totales:', totalizers)
  return (
    <div className={classes}>
      {/* Listado de productp */}
      {/*    <ProductGroup products={items} /> */}
      {
        items.map((item: any, index: number) => {
          console.log(item);
          return (
            <div key={index}>
              <div>
                <img src={item.imageUrls.at1x} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      {/* Valor total */}
      <Totalizers totalizers={totalizers[0]} />
      {/* Manejador de acciones */}
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
