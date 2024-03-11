import { useContext } from "react"
import { ContextApp } from "../App"
import Pizza from "./Pizza"

const Cart = () => {
  const c = useContext(ContextApp)
  const getTotal = () => {
    let total = 0
    c.dataPizza.forEach((Pizza) => {
      total = total + (Pizza.price * Pizza.count)
    })
    return total
  }
  return (
    <>
      <h1>Cart</h1>
      <ul>
  {c.dataPizza.map((Pizza) => (
    <li key={Pizza.name}> 
      {Pizza.name} {Pizzaizza.count} x ${Pizza.price}
    </li>
  ))}
</ul>
      <p>total: ${ getTotal()}</p>
    </>
  )
}

export default Cart