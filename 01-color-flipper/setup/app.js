const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.getElementsByClassName('color')[0];
const btnChange = document.getElementById('btn');

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

btnChange.addEventListener('click', function() {
    let randomNumber = getRandomNumber();
    // alert(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
})