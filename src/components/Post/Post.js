import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';

class Post extends Component {
    render () {
        const {post} = this.props;
        const content = post ? (
            <div className='Post'>
                <h1>Posteo Seleccionado: </h1>
                <ul>
                    <li>ID:{post.id}</li>
                    <li>title:{post.title}</li>
                    <li>body:{post.body}</li>
                </ul>
            </div>
        ) : (
            <div>Post not found...</div>
        );
        return content;
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id_post;
    return{
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post);