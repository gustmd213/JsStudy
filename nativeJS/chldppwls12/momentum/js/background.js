const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
]

const chosenImage = images[parseInt(Math.random() * images.length)]
document.querySelector('body').style.backgroundImage= `url(./img/${chosenImage})`