const button = document.querySelector('button');
const color = document.getElementById('color');

function generateHEX(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}


button.addEventListener('click', () => {
    const randomColor = generateHEX();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});