const sidebar = document.querySelector('.sidebar');
const btnSidebar = document.querySelector('.sidebar-toggle');
const btnClose = document.querySelector('.close-btn');

btnSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
})

btnClose.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
})