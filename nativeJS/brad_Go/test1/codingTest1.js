// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler", 
1. mouse가 h2 위에 있을 때 h2의 innerText = "The mouse is here!", 색은 민트색
2. mouse가 h2에서 떠났을 때 h2의 innerText = "The mouse is gone!", 색은 파란색
3. mouse로 h2를 오른쪽 클릭했을 때 h2의 innerText = "That was a right click!" 색은 빨간색
4. 창의 크기를 조절했을 때 h2의 innerText = "You just resized!", 색은 보라색
 --> 한번 만들어보세요!! 
*/
const superEventHandler = { }