//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(item) {

        questions.forEach(function(item) {
            // console.log(item);
            if(item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})


// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const article = e.currentTarget.parentElement.parentElement;
//         article.classList.toggle('show-text');
//         console.log(article);
// })
// })