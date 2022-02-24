import React from "react";
import "./Cards.css";
import CardItem from "./CardItem.component";
import WeatherApp from "../../resources/images/weatherApp.png";
import MealSharingApp from "../../resources/images/mealsharingApp.png";
import Fastpresser from "../../resources/images/fastpresser.png";
import TodoList from "../../resources/images/todolistApp.png";
import PokemonApp from "../../resources/images/pokemonApp.png";

function Cards() {
  return (
    <div className="cards" id="projects">
      <h1> PROJECTS </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={WeatherApp}
              text="Weather App using HTML, CSS, JS, and API call"
              label="Javascript, HTML, CSS, API"
              href="https://jius-weatherapp.netlify.app/"
            />
            <CardItem
              src={MealSharingApp}
              text="Meal sharing app with RESTful API"
              label="React with RESTful API"
              href="https://hyf-cph-meal-sharing.herokuapp.com/"
            />
            <CardItem
              src={PokemonApp}
              text="Fetching Pokemons data from Pokemon API"
              label="Play with API using React"
              href="https://jiu-pokemon.netlify.app"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={TodoList}
              text="Todolist"
              label="React hooks"
              href="https://jius-todolist.netlify.app/"
            />
            <CardItem
              src={Fastpresser}
              text="Fast Presser game"
              label="Javascript"
              href="https://faspressergame.netlify.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
