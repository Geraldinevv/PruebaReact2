import PizzaCard from "../components/PizzaCard";
import { useParams } from "react-router";

const Pizza = (props) => {
  const { selectedPizza } = useParams();

  return (
    <>
      <h2>{props.from == "home" ? "Pizzas destacadas" : "Nuestro catalogo"}</h2>
      <ul>
        {props.data.map((Pizza, index) => {
          if (selectedPizza != undefined && selectedPizza != "") {
            if (Pizza.name.split(" ").join("") == selectedPizza) {
              return (
                <PizzaCard
                  key={Pizza.name}
                  name={Pizza.name}
                  format={Pizza.format}
                  poster={Pizza.img}
                  price={Pizza.price}
                  count={Pizza.count}
                />
              );
            } else {
              return null;
            }
          } else if (props.from == "home" && index < 3) {
            return (
              <PizzaCard
                key={Pizza.name}
                name={Pizza.name}
                format={Pizza.format}
                poster={Pizza.img} 
                price={Pizza.price}
                count={Pizza.count}
              />
            );
          } else if (props.from !== "home") {
            return (
              <PizzaCard
                key={Pizza.name}
                name={Pizza.name}
                format={Pizza.format}
                poster={Pizza.img} 
                price={Pizza.price}
                count={Pizza.count}
              />
            );
          }
        })}
      </ul>
    </>
  );
};

export default Pizza;