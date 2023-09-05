import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SpinImage from "./pizzas/spinaci.jpg";
import FunImage from "./pizzas/funghi.jpg";
import proImage from "./pizzas/prosciutto.jpg";
import marImage from "./pizzas/margherita.jpg";
import salaImage from "./pizzas/salamino.jpg";
import focaImage from "./pizzas/focaccia.jpg";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return (
  <div className='container'>
    <Header/>
    <Footer/>
    <Menu/>
  </div>
  );
}

function Header(){
  // return <h1 style={{color:"red",fontSize:"32px",textTransform:"uppercase"}}>Fast React Pizza Co.</h1>
  const style ={};
  return (<header className='header'>
    <h1 style={style}> Fast React Pizza Co.</h1>
  </header>)
}

function Menu(){
  return (<main className='menu'>
    <h2>Our Menu</h2>
    <Pizza 
    name='Pizza Spinaci'
    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
    photoName={SpinImage}
    price={10}
    />

    <Pizza
    name="Pizza Funghi" 
    ingredients="Tomato,mushroom" 
    price={12}
    photoName = {FunImage}
   />

   <Pizza
    name="Pizza Prosciutto"
    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
    price={18}
    photoName={proImage}
   />

   <Pizza
   name="Pizza Margherita"
   ingredients="Tomato and mozarella"
   price={10}
   photoName={marImage}

   />
   
   <Pizza 
   name="Pizza Salamino"
   ingredients="Tomato and mozarella"
   price={15}
   photoName={salaImage}
   />

   <Pizza
   name="Focaccia"
   ingredients="Bread with italian olive oil and rosemary"
   price={6}
   photoName={focaImage}
   />
   
  </main>
    );
}

function Pizza(props){
  console.log(props);

  return (
  <div className="pizza">
  <img src= {props.photoName} alt={props.name} height="150px" width="150px" />
  <div>
  <h3>{props.name}</h3>
  <p>{props.ingredients}</p>
  <span>{props.price + 3}</span>
  </div>
  </div>);
}


function Footer(){
  // return <footer>{new Date().toLocaleTimeString}. we are currently open</footer>
  // return React.createElement("footer",null,"we are currently open!");
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (<footer className='footer'>{new Date().toLocaleTimeString()}</footer>
 );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
