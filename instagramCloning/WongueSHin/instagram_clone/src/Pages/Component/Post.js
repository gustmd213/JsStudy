import React, { useRef, useState } from 'react';
import ReactRouterDom, { Link } from 'react-router-dom'
import './Post.css';


const Post = () => {
    const [postImage, setPostImage] = useState('test');
    const [postText, setPostText] = useState(null);
    

    return(
        <Wait poststate = {postImage} postsetter = {setPostImage}/>
    )
}

function Wait ({poststate, postsetter}) {
    let postImage = poststate;
    let setPostImage = postsetter;
    const imageInput = useRef();
    return(
        <div id = 'container'>
            <div id="box">
                <div id ="upline">
                    <h4 id='title'>새 게시물</h4>
                    <ExitPost postImage = {postImage} Exitele = {<span id='xmark'>X</span>}/>
                </div>
                <div id = 'postbox'>
                <img id = 'picture'src='/Post/picturenmovie.png'/>
                <span id = 'text'>
                    사진과 동영상을 여기에 끌어다 놓으세요.
                </span>
                <form id = 'fileform' method='post' encType='multipart/form-data' onSubmit={(event)=>{event.preventDefault()}}>
                    <button id = 'selectbutton' onClick={()=> {imageInput.current.click()}}>컴퓨터에서 선택</button>
                    <input type='file' id='chooseFile' name='chooseFile' accept='image/*' onChange={e => {loadFile(e)}} ref={imageInput}/>
                </form>
                </div>
            </div>
        </div>
    );
}

function loadFile(e){
    console.log(e.target.files[0]);
}

function ExitPost (props) {
    const postImage = props.postImage;
    const Exitele = props.Exitele;
    const [shouldPopUp, setShouldPopUp] = useState(false);
    if (postImage === null) {
        return(
        <Link to ='/'>
            {Exitele}
        </Link>
        );
    }
    if (shouldPopUp){
    return(
        <div>
        <span>{Exitele}</span>
        <AskOneMore stateSetter = {setShouldPopUp}/>
        </div>
    );
    }
    return(
        <span onClick={() => {setShouldPopUp(true)}}>
        {Exitele}
        </span>
    )
    return null
}

const AskOneMore = ({stateSetter}) => {
    return(
        <div id='ground'>
            <div id='askbox'>
                <div id='asktext'>
                    <h3 id='ask'>게시물을 삭제하시겠어요?</h3>
                    <span id='warn'>지금 나가면 변경 사항이 모두 사라집니다.</span>
                </div>
                <Link id = 'delink'to = '/'>
                    <div id = 'del'>
                        <span id = 'deltxt'>삭제</span>   
                    </div>
                </Link>  
                <div id = 'cancle'>
                <p id ='cancletxt' onClick = {() => {stateSetter(false)}}>
                    취소
                </p>
                </div>
            </div>
        </div>
    )
}


export default Post;