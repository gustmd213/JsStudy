import React, { useRef, useState } from 'react';
import ReactRouterDom, { Link } from 'react-router-dom'
import './Post.css';


const Post = (props) => {
    const history = props.history;
    const [postImage, setPostImage] = useState('test');
    const [postText, setPostText] = useState(null);
    const [shouldPopup, setShouldPopUp] = useState(false);
    

    return(
        <Wait history = {history} poststate = {postImage} postsetter = {setPostImage} shouldPopup={shouldPopup} setShouldPopUp={setShouldPopUp}/>
    )
}

function Wait ({history, poststate, postsetter, shouldPopup, setShouldPopUp}) {
    let postImage = poststate;
    let setPostImage = postsetter;
    const imageInput = useRef();
    console.log(shouldPopup);
    if (shouldPopup === true){
        return(
        <div>
        <div id = 'container' className='exit' >
            <div id="box">
                <div id ="upline">
                    <h4 id='title'>새 게시물</h4>
                    <span id='xmark' className='exit'>X</span>
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
        <AskOneMore stateSetter={setShouldPopUp}/>
        </div>
        );
    }
    return(
        <div id = 'container' className='exit' onClick={(e)=>{ExitPost(e, postImage, history, setShouldPopUp)}}>
            <div id="box">
                <div id ="upline">
                    <h4 id='title'>새 게시물</h4>
                    <span id='xmark' className='exit'>X</span>
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

function ExitPost (e, postImage, history, popupSetter) {
    console.log(popupSetter);
    if(e.target.className === 'exit' && postImage === null){
        return history.push('/');
    }
    return(
    popupSetter(true)
    );
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