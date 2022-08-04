// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btnSwitch = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btnSwitch.addEventListener('click', function() {
    if(btnSwitch.classList.toggle('slide')) {
        video.pause();
    } else {
        video.play();
    };
})

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
});
