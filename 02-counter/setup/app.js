let number = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// const btnDecrease = btn[0];
// const btnReset = btn[1];
// const btnIncrease = btn[2];

// btnDecrease.addEventListener('click', function() {
//     number--;
//     value.textContent = number;
//     valueColor(number);
// })

// btnReset.addEventListener('click', function() {
//     number = 0;
//     value.textContent = number;
//     valueColor(number);
// })

// btnIncrease.addEventListener('click', function() {
//     number++;
//     value.textContent = number;
//     valueColor(number);
// })

// Fixed Function
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            number--;
        } else if(styles.contains('increase')) {
            number++;
        } else {
            number = 0;
        }

        if (number > 0) {
            value.style.color = 'green';
        } else if(number < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = number;
    })
})

