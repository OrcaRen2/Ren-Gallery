// script.js
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('header ul');

menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('active');
});

// 監聽螢幕寬度變化
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // 如果螢幕寬度大於 768px
        menu.classList.remove('active'); // 關閉選單
    }
});
