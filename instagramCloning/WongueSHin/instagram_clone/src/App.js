import React, { useState } from 'react';

const App = () => {
  let[maxNo, setmaxNo] = useState(2);
  let[board, setBoard] = useState(
    [
      {
        brdno: 1,
        brdwriter: 'Lee Sunsin',
        brdtitle: 'If you intend to live then you die',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'Lee sin',
        brdtitle: 'Where to go',
        brddate: new Date()
      }
    ]
  );

  const handleSaveData = (data) => {
    console.log('codelogic04');
    setmaxNo(maxNo++);
    setBoard(board.concat(
      {brdno:maxNo, brddate: new Date(), ...data}
    ));
    console.log(board);
  }

  return(
    <div>
      <BoardForm onSaveData = {handleSaveData} state= {{}}/>

      <table border ="1">
        <tbody>
          <tr align="center">
            <td width = "50">No.</td>
            <td width = "300">Title</td>
            <td width = "100">Name</td>
            <td width = "100">Date</td>
          </tr>
          {
            board.map(post => 
              (
              <BoardItem key = {post.brdno} post={post}/>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

const BoardForm = (props) => {
  let state = {}

  const handleChange = (e) => {
    state[e.target.name]= e.target.value
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSaveData(state);
  }  
  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="title" name="brdtitle" onChange={handleChange}/>
      <input placeholder="name" name="brdwriter" onChange={handleChange}/>
      <button type="submit">Save</button>
    </form>
  );
}

function BoardItem(props) {
  return(
    <tr>
      <td>{props.post.brdno}</td>
      <td>{props.post.brdtitle}</td>
      <td>{props.post.brdwriter}</td>
      <td>{props.post.brddate.toLocaleDateString('ko-KR')}</td>
    </tr>
  );
}

export default App;