import React from "react";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <div
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/19786212/pexels-photo-19786212/free-photo-of-restaurante-cena-almuerzo-comida.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
          backgroundSize: "cover",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          textAlign: "center"
        }}
      >
        Welcome to our pizzeria!
      </div>
      {props.children}
    </>
  );
};

export default Home;