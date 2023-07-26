import React, { Component } from "react";
import { PokemonTeam } from "../PokemonTeam";
import pokemonData from "../../data/pokemon.json";

import styles from "./PokemonGame.module.css";

export class PokemonGame extends Component {
  pokemons = pokemonData;

  constructor() {
    super();

    this.state = {
      team1: [],
      team2: [],
      isShowPanel: false,
    };

    this.onHandlePlay = this.onHandlePlay.bind(this);
  }

  onHandlePlay() {
    let hand1 = [];
    let hand2 = [...this.pokemons];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);

      let randPokemon = hand2.splice(randIdx, 1)[0];

      hand1.push(randPokemon);
    }

    this.setState({ team1: hand1, team2: hand2, isShowPanel: true });
  }

  render() {
    const team1Point = this.state.team1.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      0
    );
    const team2Point = this.state.team2.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      0
    );

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className={styles.playTitle}>Welcome Pokemon</h1>
        <button onClick={this.onHandlePlay} className={styles.playButton}>
          Play
        </button>

        {this.state.isShowPanel && (
          <div>
            <PokemonTeam
              teamName="Team 1"
              isWinner={team1Point > team2Point}
              teamData={this.state.team1}
              teamPoint={team1Point}
            />

            <PokemonTeam
              teamName="Team 2"
              isWinner={team2Point > team1Point}
              teamData={this.state.team2}
              teamPoint={team2Point}
            />
          </div>
        )}
      </div>
    );
  }
}
