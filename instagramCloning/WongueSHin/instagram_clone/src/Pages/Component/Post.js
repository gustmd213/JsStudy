import React from 'react';
import ReactRouterDom, { Link } from 'react-router-dom'
import './Post.css';


const Post = () => {
    return(
        <div id = 'container'>
            <div id="box">
                <div id ="upline">
                    <h4 id='title'>새 게시물</h4>
                    <Link to='/'>
                    <span id='xmark'>X</span>
                    </Link>
                </div>
                <div id = 'postbox'>
                <img id = 'picture'src='/Post/picturenmovie.png'/>
                <span id = 'text'>
                    사진과 동영상을 여기에 끌어다 놓으세요.
                </span>
                <button id = 'selectbutton'>컴퓨터에서 선택</button>
                </div>
            </div>
        </div>
    )
}


export default Post;