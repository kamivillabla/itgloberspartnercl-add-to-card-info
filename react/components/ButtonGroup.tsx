import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'

import style from './style.css'

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {
  const container__buttons = generateBlockClass(style.container__buttons, blockClass)
  const button__checkout = generateBlockClass(style.button__checkout, blockClass)
  const button__cart = generateBlockClass(style.button__cart, blockClass)

  return (
    <>
      <div className={container__buttons}>
        <a className={button__checkout} >Continúa Comprando</a>
        {/* Checkout no es parte de spa de vtex io*/}
        <a href="/checkout/#/cart" className={button__cart}>Ver el carrito</a>
      </div>
    </>
  )
}

export default ButtonGroup
