import React, { Component, memo } from "react";

import style from "./jokes.module.css";

export class JokesCard extends Component {
  constructor() {
    super();

    this.state = {
      vote: 0,
    };

    this.incrementVote = this.incrementVote.bind(this);
    this.decrementVote = this.decrementVote.bind(this);
  }

  //   shouldComponentUpdate(){}

  incrementVote(voteId) {
    const newVote = this.state.vote + 1;

    this.setState({ vote: newVote });
    this.props.addVoteItem(voteId, newVote);
  }

  decrementVote(voteId) {
    const newVote = this.state.vote - 1;

    this.setState({ vote: newVote });
    this.props.rmvVoteItem(voteId, newVote);
  }

  render() {
    const { joke, id, vote, index } = this.props;
    return (
      <div className={style.card}>
        <div
          className={style.voteBox}
          style={{
            backgroundColor: index < 3 ? "green" : index < 6 ? "orange" : "red",
          }}
        ></div>
        <div className={style.vote_content}>
          <button onClick={() => this.decrementVote(id)}>-</button>
          <span>{vote}</span>
          <button onClick={() => this.incrementVote(id)}>+</button>
        </div>

        <div>
          <p>{joke}</p>
        </div>
      </div>
    );
  }
}

export default memo(JokesCard);
