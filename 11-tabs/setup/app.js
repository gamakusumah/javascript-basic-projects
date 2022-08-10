const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let btnId = e.currentTarget.dataset.id;

        btns.forEach(function(item) {
            if (item !== btn) {
                item.classList.remove('active');
            }
        })

        btn.classList.toggle('active');

        contents.forEach(function(content) {
            let contentId = content.getAttribute('id');

            if (contentId === btnId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }

        })
    })
})