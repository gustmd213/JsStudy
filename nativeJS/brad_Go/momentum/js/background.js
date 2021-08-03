// img 폴더 안에 있는 이미지 이름들과 동일하게 배열의 index값을 작성
const images = ["0.jpg", "1.jpg", "2.jpg"];

// index값을 random하게 줘서 변수에 저장
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 새로운 이미지 태그를 생성해서 소스를 설정하고 body의 끝에 img태그 붙여넣기
// js에서 html 요소를 생성!!
// const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

// 랜덤으로 선택한 이미지를 배경화면으로 설정하기
const url = "url('img/" + chosenImage + "')";
document.body.style.backgroundImage = url;