// select modal-btn,modal-overlay,close-btn
const btnModal = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
btnModal.addEventListener('click', function() {
    modalOverlay.classList.toggle('open-modal');
})
// when user clicks close-btn remove .open-modal from modal-overlay
btnClose.addEventListener('click', function() {
    modalOverlay.classList.toggle('open-modal');
})
