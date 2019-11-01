import React from 'react';
import './Home.css';
import { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const { posts }= this.props;
    const postList = posts.map(post => {
      return (
        <div key={post.id}>
          <Link to={'/' + post.id}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
        );
    });
    return (
      <div className="Home">
        <h1>Home</h1>
        <p> Este es el Home, aca hay info ppal jejejeejejejejejeje</p>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    ...ownProps,
    posts: state.posts
  };
}


export default connect(mapStateToProps)(Home);
