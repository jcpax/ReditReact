import React from 'react';
import axios from 'axios';
import PostsList from './PostsList';
import DropdownBtn from '../Header/dropdownBtn';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            posts:[],
            comments: [],
            date: []
        }
    }
    
    componentDidMount() {
     axios.get('/posts').then((posts) => {
        this.setState({posts: posts.data.posts});
    });
    }
    
    render() {
        return (
        <div>
            <DropdownBtn data={this.state.posts} />  
        <ul>
            {this.state.posts.map((data) => <PostsList key={data._id} post={data} />)}
        </ul>
        </div>
        
        )
    }
}