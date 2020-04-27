import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'
 
class Post extends Component {

handleClick = () =>{
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
}

    render() {

        console.log(this.props)

        const post = this.props.post ? (
            <div className="post">
                <h5 className="center">{this.props.post.title}</h5>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <div className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </div>
                </div>
            </div>
        ) : (  
                <div className="center">Loading post...</div>
            )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{

    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id === id)
    }

}

const mapDispatchToPrpos = (dispatch) =>{
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToPrpos)(Post); 