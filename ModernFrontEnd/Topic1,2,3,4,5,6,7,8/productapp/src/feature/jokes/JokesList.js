import React, { Component } from "react";
import JokesCard from "./JokesCard";
import style from "./jokes.module.css";
import { ErrorBoundary } from "shared/components/ErrorBoundary";

export class JokesList extends Component {
  render() {
    const { data, rmvVoteItem, addVoteItem } = this.props;

    const content = data?.map((item, index) => (
      <ErrorBoundary key={item.id} name="jokes card">
        <JokesCard
          index={index}
          rmvVoteItem={rmvVoteItem}
          addVoteItem={addVoteItem}
          {...item}
        />
      </ErrorBoundary>
    ));

    return (
      <div>
        JokesList
        <div className={style.list}>{content}</div>
      </div>
    );
  }
}

export default JokesList;
