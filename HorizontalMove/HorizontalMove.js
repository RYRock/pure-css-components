var cover = document.querySelector('.wrapper');
var toggleBtn = document.querySelector('.toggleBtn');

function toggleCover() {
    cover.classList.toggle('collapsed');
}

toggleBtn.addEventListener('click', toggleCover);
