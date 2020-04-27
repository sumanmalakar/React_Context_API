import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


class Home extends Component {
  
  render() {
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
         
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>

              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts Yet</div>
    );

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p> {postList}</p>
      </div>
    );
  }
}

const mapStateProps = (state) =>{

  return{
    posts: state.posts
  }
}

export default connect(mapStateProps)(Home);
