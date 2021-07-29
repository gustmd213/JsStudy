const clockContainer = document.getElementById('js-clock')
const clockText = clockContainer.querySelector("h1")

 
function clockWork() {
    const date = new Date;
    const hours =  date.getHours(); const minutes= date.getMinutes();
    clockText.innerText = '${hours}:${minutes}';
}
function init() {
    clockWork();
 //   setInterval(clockText,1000)  
}

console.log('h1')
init();
