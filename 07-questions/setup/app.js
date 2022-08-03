//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const article = btn.parentElement.parentElement;
        article.classList.toggle('show-text')
})
})