import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';
import axiosInstance from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        selectePostId: null
    }

    componentDidMount() {
        axiosInstance.get('/posts')
        .then(response =>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                ...post,
                author: 'Max'
            }});
            this.setState({posts: updatedPosts}); 
            //console.log(response)
        })
        .catch(error => {
            console.log(error);
            this.setState({error: true});
        });
        
    }

    postSelectedHandler = (id)  => {
        this.setState({selectePostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if(!this.state.error){
            posts = this.state.posts.map(
                post => {
                    return <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.author} 
                            clicked={() => this.postSelectedHandler(post.id)}
                            />;
                }
            );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectePostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;