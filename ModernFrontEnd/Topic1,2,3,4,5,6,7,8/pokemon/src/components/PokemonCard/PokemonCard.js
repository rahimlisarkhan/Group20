import React, { Component } from "react";
import styles from "./PokemonCard.module.css";
import { convertItemImage } from "../../shared/utils/convertImageItem";

export class PokemonCard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;

    return (
      <div className={styles.card}>
        <div className={styles.card_title}>{name}</div>
        <img src={convertItemImage(id)} alt={name} />
        <div>Type:{type}</div>
        <div>EXP:{base_experience}</div>
      </div>
    );
  }
}

export default PokemonCard;
