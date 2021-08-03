import React, { useState } from 'react';

const App = () => {
  const[board, setBoard] = useState(
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

  return(
    <div>
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