import React from 'react';
import Post from './Post';
import './PostFrame.css'

class PostFrame extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        fetch("https://192.168.1.198:5001/api/Post/get-all")
        .then(request => request.json())
        .then(json =>{
            console.log(json);
            this.setState(() =>({
                posts: json
            }));
        })
    }

    render(){
        return (
            <div className="container">
                {
                    this.state.posts.map((post) =>{

                        return <Post imageUrl={ post.imageUrl} contentBody={post.contentBody} label={post.label}/>
                        // return <Post imageUrl={post,imageUrl} label={post.label}  contentBody={post.contentBody}/>
                    })
                }
            </div>
        )
    }
}



export default PostFrame;