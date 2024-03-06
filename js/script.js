// ハンバーガーメニューの開閉
document.querySelector('.header-btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('active');
    });