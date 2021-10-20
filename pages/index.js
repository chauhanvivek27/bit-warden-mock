import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import cardStyles from "../styles/card.module.css";

export default class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      // eslint-disable-next-line react/jsx-fragments
      <Fragment>
        {posts.length === 0 && <Progessbar />}
        <Post {...this.props} />
      </Fragment>
    );
  }
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return { props: { posts: response.data } };
}

const Progessbar = () => (
  <div className={cardStyles.demo_container}>
    <div className={cardStyles.progress_bar}>
      <div className={cardStyles.progress_bar_value} />
    </div>
  </div>
);

const Post = ({ posts }) => (
  <div className={cardStyles.card}>
    {posts.map((p) => (
      <div className={cardStyles.card_radius}>
        <h1 className={cardStyles.title}>{p.title}</h1>
        <p className={cardStyles.body}>{p.body}</p>
        <div>
          <button type="button" id="click" aria-label="Details">
            Details
          </button>
        </div>
      </div>
    ))}
  </div>
);

Post.propTypes = {
  posts: PropTypes.arrayOf(Object),
};

Home.propTypes = {
  posts: PropTypes.arrayOf(Object),
};

Home.defaultProps = {
  posts: [],
};

Post.defaultProps = {
  posts: [],
};
