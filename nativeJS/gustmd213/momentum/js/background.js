const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// const backgroundImg = document.querySelector("img :first-child")
document.body.setAttribute("background",`img/${chosenImage}`)
// document.backgroundImg.src = chosenImage;
