// ハンバーガーメニューの開閉
document.querySelector('.header-btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.global__nav__list').classList.toggle('active');
    });