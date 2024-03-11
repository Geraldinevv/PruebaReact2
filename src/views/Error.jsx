import { useEffect } from "react"
import { useNavigate } from "react-router"


const Error = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, [2000])
  }, [])
  return (
    <>
      <h1>La pagina que buscas no existe</h1>
    </>
  )
}

export default Error