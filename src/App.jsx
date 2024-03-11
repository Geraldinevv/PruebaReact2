import { useState, useEffect, createContext } from 'react'
import './App.css'
import Home from "./views/Home"
import Pizza from "./views/Pizza"
import Cart from "./views/Cart"
import Error from "./views/Error"
import { Routes, Route } from 'react-router'
import { NavLink } from "react-router-dom"
import Navbar from './components/Navbar' 


export const ContextApp = createContext()

const App = () => {
  const [dataPizza, setDataPizza] = useState([])

  const fetchPizza = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    const adaptedPizza = []
    data.forEach(Pizza => {
      adaptedPizza.push({...Pizza, count: 0})
    })
    setDataPizza(adaptedPizza)
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  useEffect(() => {
  }, [dataPizza]);

  return (
    <ContextApp.Provider value={{dataPizza, setDataPizza}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <Home>
            <Pizza data={dataPizza} from="home"/>
            <NavLink to="/Pizza">Ver todas las pizzas</NavLink>
          </Home>
        }/>
        <Route path="/Pizza" element={<Pizza data={dataPizza}/>}/>
        <Route path="/Pizza/:selectedPizza" element={<Pizza data={dataPizza}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </ContextApp.Provider>
  )
}

export default App