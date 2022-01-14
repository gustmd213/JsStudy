const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];

const bgImage = img[Math.floor(Math.random() * img.length)];

const url = `url(img/${bgImage})`;

document.body.style.backgroundImage = url;