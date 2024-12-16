// ===========================
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function() {
    itemActive++;
    if (itemActive >= countItem) {
        itemActive = 0; // إعادة إلى البداية
    }
    showSlider();
}

prev.onclick = function() {
    itemActive--;
    if (itemActive < 0) {
        itemActive = countItem - 1; // الانتقال إلى آخر صورة
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    next.click();
}, 10000);

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    
    if (itemActiveOld) {
        itemActiveOld.classList.remove('active');
    }
    if (thumbnailActiveOld) {
        thumbnailActiveOld.classList.remove('active');
    }

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// إعادة تعيين المؤقت كلما تم تغيير الصورة
clearInterval(refreshInterval);
refreshInterval = setInterval(() => {
    next.click();
}, 10000);

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});