const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpeg",
    "6.jpeg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
]

const randomImgs = images[Math.floor(Math.random() * images.length)];

const paintImg = document.createElement("img"); 
paintImg.src = `img/${randomImgs}`

document.body.appendChild(paintImg);