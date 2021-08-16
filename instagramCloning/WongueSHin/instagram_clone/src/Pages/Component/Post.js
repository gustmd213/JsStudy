import React from 'react';
import './Post.css';


const Post = () => {
    return(
        <div id = 'container'>
            <div id="box">
                <div id ="upline">
                    <h5>새 게시물</h5>
                    <p>X</p>
                </div>
                사진과 동영상을 여기에 끌어다 놓으세요.
                <button>컴퓨터에서 선택</button>
            </div>
        </div>
    )
}


export default Post;