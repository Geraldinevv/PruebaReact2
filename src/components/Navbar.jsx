import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/pizza">Pizzas</NavLink> 
      <NavLink to="/cart">carrito</NavLink> 
    </nav>
  )
}

export default Navbar