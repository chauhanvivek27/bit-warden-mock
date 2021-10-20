import React, { Component } from "react";
import axios from "axios";

export default class Card extends Component {
  render() {
    return <p> SSR Rendering </p>;
  }
}

export async function getServerSideProps() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return { props: { cards: data } };
}
