import React from "react"
import { useAppSelector } from "../../../hooks"

const Basket = () => {
  const basket = useAppSelector((state) => state.shop.basket)
  console.log(basket)

  return <div>Basket</div>
}

export default Basket
