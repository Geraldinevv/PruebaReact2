import { useContext } from "react"
import { ContextApp} from "../App"

const PizzaCard = (props) => {
  const c = useContext(ContextApp)

  const handlePizza = (name, mode) => {
    const updatedPizza = []
    c.dataPizza.forEach((Pizza) => {
      if (Pizza.name == name){
        const operate = mode == "add" ? Pizza.count + 1 : Pizza.count - 1
        updatedPizza.push(
          {...Pizza, count: operate}
        )
      } else {
        updatedPizza.push(pizza)
      }
    })
    c.setDataPizza(updatedPizza)
  }
  return (
    <li>
      <h3>{`${props.name} ${props.year}`}</h3>
      <h4>{props.format}</h4>
      <img src={props.poster} alt={props.name} width="200" height="200" />
      <p>${props.price}</p>
      <span>Llevas en el carrito: {props.count}</span>
      <button disabled={props.count == 0 ? true : false} onClick={() => handlePizza(props.name, 'remove')}>Quitar del carrito</button>
      <button onClick={() => handlePizza(props.name, 'add')}>Agregar al carrito</button>
    </li>
  )
}

export default PizzaCard